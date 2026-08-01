/* NuBench site — all rendering is driven by the NB object in data.js. */
"use strict";

const $ = (sel, el = document) => el.querySelector(sel);
const SVG_NS = "http://www.w3.org/2000/svg";

/* ---------- task definitions ----------
   Column layout mirrors the paper's tables (2–6). `pair: true` marks
   direction-style cells holding separate CC / NC values. */
const TASKS = {
  energy: {
    label: "Energy",
    desc: "Reconstruction of neutrino energy. Bias is the median percentage error (E<sub>true</sub> − E<sub>reco</sub>)/E<sub>true</sub> × 100; σ is the 84th–16th percentile width of that error, both per true-energy range and including CC and NC events.",
    takeaway: "ParticleNeT and DynEdge trade the lead across datasets; differences are mostly marginal, with GRIT slightly behind on the small geometries.",
    groups: [
      { label: "E ≤ 10² GeV", cols: ["Bias [%]", "σ [%]"] },
      { label: "10² – 10³ GeV", cols: ["Bias [%]", "σ [%]"] },
      { label: "10³ – 10⁵ GeV", cols: ["Bias [%]", "σ [%]"] },
    ],
    chart: { col: 3, label: "Energy resolution σ [%] · 10²–10³ GeV", better: "lower" },
  },
  direction: {
    label: "Direction",
    pair: true,
    desc: "Reconstruction of the neutrino arrival direction. ψ is the opening angle between true and reconstructed direction; each cell reports νμ CC / νμ NC events separately.",
    takeaway: "DeepIce leads on most geometries, at ~100× the parameter count; GRIT takes the sparse Triangle array and the ice dataset.",
    groups: [
      { label: "E ≤ 10³ GeV · CC / NC", cols: ["ψ median [°]", "ψ ≤ 1° [%]", "ψ ≤ 5° [%]"] },
      { label: "10³ – 10⁵ GeV · CC / NC", cols: ["ψ median [°]", "ψ ≤ 1° [%]", "ψ ≤ 5° [%]"] },
    ],
    chart: { col: 0, cc: true, label: "Median opening angle ψ [°] · νμ CC, E ≤ 10³ GeV", better: "lower" },
  },
  classification: {
    label: "Track / Cascade",
    desc: "Binary classification of event topology — track-like versus cascade-like — reported as ROC AUC, overall and per true-energy range.",
    takeaway: "No single winner: GRIT leads on four datasets, ParticleNeT and DynEdge split the rest; separation is hardest at low energy everywhere.",
    groups: [
      { label: "", cols: ["AUC (all E)"] },
      { label: "", cols: ["AUC · E ≤ 10²"] },
      { label: "", cols: ["AUC · 10²–10³"] },
      { label: "", cols: ["AUC · 10³–10⁵"] },
    ],
    chart: { col: 0, label: "ROC AUC · all energies", better: "higher", ymin: 0.5 },
  },
  vertex: {
    label: "Vertex",
    desc: "Localization of the neutrino interaction vertex. D<sub>xyz</sub> is the median Euclidean distance between true and reconstructed vertex; D<sub>z</sub> and D<sub>xy</sub> are its depth and radial components.",
    takeaway: "DynEdge dominates vertex reconstruction, achieving the smallest distances on every dataset — often by a factor of 2–3.",
    groups: [
      { label: "E ≤ 10³ GeV", cols: ["D<sub>xyz</sub> [m]", "|D<sub>z</sub>| [m]", "D<sub>xy</sub> [m]"] },
      { label: "10³ – 10⁵ GeV", cols: ["D<sub>xyz</sub> [m]", "|D<sub>z</sub>| [m]", "D<sub>xy</sub> [m]"] },
    ],
    chart: { col: 0, label: "Median vertex distance D<sub>xyz</sub> [m] · E ≤ 10³ GeV", better: "lower" },
  },
  inelasticity: {
    label: "Inelasticity",
    desc: "Estimation of the interaction inelasticity y — the fraction of neutrino energy transferred to the hadronic system. Reported are the median residual R<sub>y</sub> and its 84th–16th percentile width σ, on νμ CC events.",
    takeaway: "DynEdge is the most reliable at low energy, where inelasticity is hardest; above 1 TeV the three models converge.",
    groups: [
      { label: "10 – 10² GeV", cols: ["Median R<sub>y</sub>", "σ"] },
      { label: "10² – 10³ GeV", cols: ["Median R<sub>y</sub>", "σ"] },
      { label: "10³ – 10⁵ GeV", cols: ["Median R<sub>y</sub>", "σ"] },
    ],
    chart: { col: 3, label: "Resolution σ of R<sub>y</sub> · 10²–10³ GeV", better: "lower" },
  },
};

/* Figures rendered from the paper's own PDFs (docs/assets/figures). An
   artifact/preview build may define window.NB_FIG_SRC to swap in inlined
   images instead of file paths. */
const FIGURES = {
  energy: [
    { file: "energy_he", caption: "Energy reconstruction on the five full-range datasets, split into νμ CC and νμ NC events. The diagonal denotes ideal reconstruction; shaded bands span the 16th–84th percentile of the reconstructed energy." },
    { file: "energy_le", caption: "Energy reconstruction on the two low-energy datasets, Flower S and Hexagon Ice LE." },
  ],
  direction: [
    { file: "direction_he", caption: "Direction reconstruction on the five high-energy datasets: median opening angle as a function of neutrino energy, and the distribution of opening angles below 5°." },
    { file: "direction_le", caption: "Direction reconstruction on the two low-energy datasets, Flower S and Hexagon Ice LE." },
  ],
  classification: [
    { file: "tc_roc", caption: "ROC curves for track/cascade classification on the seven datasets." },
    { file: "tc_scores", caption: "Distribution of classification scores on true track events — scores near 1 indicate confident track classification, scores near 0 confident cascade classification." },
  ],
  vertex: [
    { file: "vertex_distance", caption: "Median Euclidean distance between true and reconstructed vertex as a function of neutrino energy (solid: νμ CC, dotted: νμ NC)." },
    { file: "vertex_contours", caption: "Vertex error contours: markers show the median error, contours the 68% quantile. Smaller areas mean lower variance; centers close to zero mean less bias." },
  ],
  inelasticity: [
    { file: "inelasticity", caption: "Reconstruction of visible inelasticity on the six water-based datasets." },
  ],
};

const state = { task: "energy", dataset: {} };

/* ---------- helpers ---------- */

function el(tag, attrs = {}, ...children) {
  const node = tag.includes(":svg")
    ? document.createElementNS(SVG_NS, tag.replace(":svg", ""))
    : document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.setAttribute("class", v);
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const c of children) {
    if (c == null) continue;
    node.append(c.nodeType ? c : document.createTextNode(c));
  }
  return node;
}

function svgEl(tag, attrs = {}, ...children) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  for (const c of children) node.append(c.nodeType ? c : document.createTextNode(c));
  return node;
}

const fmt = (v) => String(v);

/* ---------- geometry art (top-down detector layouts) ---------- */

function phyllotaxis(n) {
  const pts = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const r = Math.sqrt((i + 0.5) / n);
    const t = i * golden;
    pts.push([r * Math.cos(t), r * Math.sin(t)]);
  }
  return pts;
}

function hexLattice() {
  // schematic hexagonal array with a denser infill near the center,
  // echoing IceCube's main array + DeepCore
  const pts = [];
  for (let q = -5; q <= 5; q++) {
    for (let r = Math.max(-5, -q - 5); r <= Math.min(5, -q + 5); r++) {
      const x = q + r / 2;
      const y = (r * Math.sqrt(3)) / 2;
      pts.push([x / 5.2, y / 5.2]);
    }
  }
  const infill = phyllotaxis(8).map(([x, y]) => [x * 0.16 + 0.05, y * 0.16 + 0.04]);
  return { main: pts, infill };
}

function geometryArt(kind, nStrings, size = 130) {
  const svg = svgEl("svg", {
    width: size, height: size,
    viewBox: "-1.15 -1.15 2.3 2.3",
    "aria-hidden": "true",
  });
  const dot = (x, y, r, cls = "gdot") =>
    svg.append(svgEl("circle", { cx: x.toFixed(3), cy: y.toFixed(3), r, class: cls }));

  if (kind === "sunflower") {
    const r = nStrings > 600 ? 0.013 : nStrings > 120 ? 0.05 : 0.055;
    for (const [x, y] of phyllotaxis(nStrings)) dot(x, y, r);
  } else if (kind === "hexagon") {
    const { main, infill } = hexLattice();
    for (const [x, y] of main) dot(x, y, 0.055);
    for (const [x, y] of infill) dot(x, y, 0.028, "gdot infill");
  } else if (kind === "cluster") {
    dot(0, 0, 0.09);
    for (let i = 0; i < 7; i++) {
      const t = (i / 7) * 2 * Math.PI - Math.PI / 2;
      dot(0.62 * Math.cos(t), 0.62 * Math.sin(t), 0.09);
    }
  } else if (kind === "triangle") {
    for (let i = 0; i < 3; i++) {
      const t = (i / 3) * 2 * Math.PI - Math.PI / 2;
      dot(0.6 * Math.cos(t), 0.6 * Math.sin(t), 0.11);
    }
  }
  return svg;
}

/* ---------- hero background ---------- */

function renderHeroArt() {
  const host = $("#hero-art");
  const size = 780;
  const svg = svgEl("svg", {
    width: size, height: size,
    viewBox: "-1.05 -1.05 2.1 2.1",
    "aria-hidden": "true",
  });
  const pts = phyllotaxis(640);
  pts.forEach(([x, y], i) => {
    const r = Math.hypot(x, y);
    const c = svgEl("circle", {
      cx: x.toFixed(3), cy: y.toFixed(3),
      r: 0.008,
      fill: "currentColor",
      opacity: (0.28 * (1 - 0.75 * r)).toFixed(3),
    });
    if (i % 37 === 0) c.setAttribute("class", "twinkle");
    svg.append(c);
  });
  svg.style.color = "var(--accent)";
  host.append(svg);
}

/* ---------- leaderboard ---------- */

function renderTabs() {
  const host = $("#task-tabs");
  host.replaceChildren();
  for (const [key, t] of Object.entries(TASKS)) {
    host.append(el("button", {
      class: "task-tab" + (state.task === key ? " active" : ""),
      onclick: () => { state.task = key; renderLeaderboard(); },
    }, t.label));
  }
}

function availableModels(taskKey, dsKey) {
  const ds = NB.results[taskKey][dsKey] || {};
  return NB.modelOrder.filter((m) => m in ds);
}

function renderLegend(models) {
  const box = el("div", { class: "legend" });
  for (const m of models) {
    box.append(el("span", { class: "item" },
      el("span", { class: "dot", style: `background:${NB.models[m].color}` }),
      NB.models[m].name));
  }
  return box;
}

function chartValue(taskKey, dsKey, model) {
  const t = TASKS[taskKey];
  const row = (NB.results[taskKey][dsKey] || {})[model];
  if (!row) return null;
  let cell = row[t.chart.col];
  if (cell == null) return null;
  if (t.pair) cell = t.chart.cc ? cell.cc : cell.nc;
  return cell ? cell.v : null;
}

function renderChart(taskKey) {
  const t = TASKS[taskKey];
  const dsKeys = NB.datasetOrder.filter((d) => d in NB.results[taskKey]);
  const models = NB.modelOrder.filter((m) =>
    dsKeys.some((d) => m in NB.results[taskKey][d]));

  const W = 980, H = 300;
  const pad = { l: 56, r: 10, t: 14, b: 34 };
  const pw = W - pad.l - pad.r, ph = H - pad.t - pad.b;

  let vmax = 0;
  for (const d of dsKeys) for (const m of models) {
    const v = chartValue(taskKey, d, m);
    if (v != null && v > vmax) vmax = v;
  }
  const ymin = t.chart.ymin ?? 0;
  // round tick step (1/2/2.5/5 × 10^k) targeting ~5 intervals
  const rawStep = (vmax - ymin) / 5;
  const mag = 10 ** Math.floor(Math.log10(rawStep));
  let step = mag, nTicks = 99;
  for (const m of [1, 2, 2.5, 5, 10]) {
    const s = m * mag;
    const n = Math.ceil((vmax * 1.02 - ymin) / s);
    if (Math.abs(n - 5) < Math.abs(nTicks - 5)) { step = s; nTicks = n; }
  }
  const ymax = ymin + step * nTicks;
  const y = (v) => pad.t + ph * (1 - (v - ymin) / (ymax - ymin));

  const svg = svgEl("svg", {
    viewBox: `0 0 ${W} ${H}`, width: "100%", role: "img",
    style: "min-width:720px",
  });

  for (let i = 0; i <= nTicks; i++) {
    const v = ymin + step * i;
    const yy = y(v);
    svg.append(svgEl("line", {
      x1: pad.l, x2: W - pad.r, y1: yy, y2: yy,
      stroke: "var(--grid-line)", "stroke-width": 1,
    }));
    svg.append(svgEl("text", {
      x: pad.l - 8, y: yy + 4, "text-anchor": "end",
      "font-size": 11, fill: "var(--text-faint)",
    }, +v.toFixed(6)));
  }

  const groupW = pw / dsKeys.length;
  const barW = Math.min(20, (groupW * 0.72) / models.length);

  dsKeys.forEach((d, gi) => {
    const present = models.filter((m) => chartValue(taskKey, d, m) != null);
    const total = present.length * barW;
    const x0 = pad.l + gi * groupW + (groupW - total) / 2;
    present.forEach((m, bi) => {
      const v = chartValue(taskKey, d, m);
      const yy = y(v);
      const bar = svgEl("rect", {
        x: (x0 + bi * barW + 1).toFixed(1),
        y: yy.toFixed(1),
        width: (barW - 2).toFixed(1),
        height: Math.max(1.5, pad.t + ph - yy).toFixed(1),
        rx: 2.5,
        fill: NB.models[m].color,
      });
      bar.append(svgEl("title", {}, `${NB.models[m].name} · ${NB.datasets[d].name}: ${v}`));
      svg.append(bar);
    });
    svg.append(svgEl("text", {
      x: pad.l + gi * groupW + groupW / 2,
      y: H - 12, "text-anchor": "middle",
      "font-size": 11.5, fill: "var(--text-muted)",
    }, NB.datasets[d].name));
  });

  svg.append(svgEl("line", {
    x1: pad.l, x2: W - pad.r, y1: pad.t + ph, y2: pad.t + ph,
    stroke: "var(--border-strong)", "stroke-width": 1,
  }));

  return svg;
}

function scalarCell(cell) {
  const td = el("td", { class: "num" });
  if (cell == null) { td.textContent = "—"; return td; }
  const span = el("span", { class: cell.b ? "best" : "" }, fmt(cell.v));
  td.append(span);
  if (cell.e != null) td.append(el("span", { class: "err" }, ` ±${fmt(cell.e)}`));
  return td;
}

function pairCell(cell) {
  const td = el("td", { class: "num" });
  if (cell == null) { td.textContent = "—"; return td; }
  const side = (s) => s == null
    ? "—"
    : el("span", { class: s.b ? "best" : "" }, fmt(s.v));
  td.append(side(cell.cc), el("span", { class: "err" }, " / "), side(cell.nc));
  return td;
}

function renderTable(taskKey, dsKey) {
  const t = TASKS[taskKey];
  const models = availableModels(taskKey, dsKey);
  const table = el("table", { class: "results" });

  const thead = el("thead");
  const hasGroups = t.groups.some((g) => g.label);
  if (hasGroups) {
    const tr = el("tr", { class: "groups" }, el("th"));
    for (const g of t.groups) {
      tr.append(el("th", { colspan: g.cols.length, class: g.label ? "group" : "" }, g.label));
    }
    thead.append(tr);
  }
  const tr2 = el("tr", {}, el("th", {}, "Model"));
  for (const g of t.groups) for (const c of g.cols) {
    const th = el("th");
    th.innerHTML = c;
    tr2.append(th);
  }
  thead.append(tr2);
  table.append(thead);

  const tbody = el("tbody");
  for (const m of models) {
    const row = NB.results[taskKey][dsKey][m];
    const tr = el("tr", {},
      el("td", { class: "model" },
        el("span", { class: "dot", style: `background:${NB.models[m].color}` }),
        NB.models[m].name));
    for (const cell of row) tr.append(t.pair ? pairCell(cell) : scalarCell(cell));
    tbody.append(tr);
  }
  table.append(tbody);
  return table;
}

function renderLeaderboard() {
  renderTabs();
  const t = TASKS[state.task];
  $("#task-desc").innerHTML = t.desc;
  $("#task-takeaway").textContent = t.takeaway;

  const dsKeys = NB.datasetOrder.filter((d) => d in NB.results[state.task]);
  if (!dsKeys.includes(state.dataset[state.task])) state.dataset[state.task] = dsKeys[0];
  const active = state.dataset[state.task];

  // chart panel
  const chartPanel = $("#chart-panel");
  const chartTitle = el("span");
  chartTitle.innerHTML = t.chart.label;
  const chartParts = [
    el("div", { class: "panel-head" },
      el("div", { class: "panel-title" },
        chartTitle,
        el("span", { class: "dir" },
          t.chart.better === "lower" ? "lower is better ↓" : "higher is better ↑")),
      renderLegend(NB.modelOrder.filter((m) =>
        dsKeys.some((d) => m in NB.results[state.task][d])))),
    el("div", { class: "chart-scroll" }, renderChart(state.task)),
  ];
  if (t.chart.ymin) {
    chartParts.push(el("div", { class: "chart-note" },
      "Axis starts at 0.5 — the AUC of a random classifier."));
  }
  chartPanel.replaceChildren(...chartParts);

  // table panel
  const chips = el("div", { class: "chip-row" });
  for (const d of dsKeys) {
    chips.append(el("button", {
      class: "chip" + (d === active ? " active" : ""),
      onclick: () => { state.dataset[state.task] = d; renderLeaderboard(); },
    }, NB.datasets[d].name));
  }
  const tablePanel = $("#table-panel");
  tablePanel.replaceChildren(
    chips,
    el("div", { class: "table-scroll" }, renderTable(state.task, active)),
    el("div", { class: "tbl-note" },
      "Values as reported in the paper; ",
      el("span", { class: "mono", style: "color:var(--best);font-weight:700" }, "highlighted"),
      " marks the best model per metric (including statistical ties). Uncertainties are one bootstrap standard deviation. — indicates the model was not evaluated.")
  );

  renderFigures(state.task);
}

function renderFigures(taskKey) {
  const panel = $("#figures-panel");
  const figs = FIGURES[taskKey] || [];
  const inlined = typeof window !== "undefined" && window.NB_FIG_SRC;
  const grid = el("div", { class: "fig-grid" });
  for (const f of figs) {
    const src = inlined ? window.NB_FIG_SRC[f.file] : `assets/figures/${f.file}.png`;
    const img = el("img", { src, alt: f.caption, loading: "lazy" });
    // data: URIs can't be opened in a new tab, so only link real files
    const frame = el("div", { class: "fig-frame" },
      inlined ? img : el("a", { href: src, target: "_blank", rel: "noopener" }, img));
    grid.append(el("figure", { class: "figure" }, frame,
      el("figcaption", {}, f.caption)));
  }
  panel.replaceChildren(
    el("div", { class: "panel-head" },
      el("div", { class: "panel-title" }, "Figures from the paper"),
      el("div", { class: "legend" },
        el("span", { class: "item" }, "Model colors follow the paper's own scheme"))),
    grid);
}

/* ---------- datasets ---------- */

function renderDatasets() {
  const host = $("#ds-grid");
  for (const key of NB.datasetOrder) {
    const d = NB.datasets[key];
    const art = el("div", { class: "ds-art" },
      geometryArt(d.geo, d.strings),
      el("span", { class: "scale" }, `${d.spacing} string spacing`));

    const stats = el("div", { class: "ds-stats" },
      el("div", { class: "ds-stat" }, el("div", { class: "k" }, "Events"), el("div", { class: "v" }, d.events)),
      el("div", { class: "ds-stat" }, el("div", { class: "k" }, "Strings · OMs"), el("div", { class: "v" }, `${d.strings} · ${d.oms.toLocaleString("en-US")}`)),
      el("div", { class: "ds-stat" }, el("div", { class: "k" }, "Energy range"), el("div", { class: "v" }, d.erange)),
      el("div", { class: "ds-stat" }, el("div", { class: "k" }, "νμ CC / NC [%]"), el("div", { class: "v" }, d.ccnc)));

    const links = el("div", { class: "ds-links" });
    const linkNames = { sqlite: "SQLite", parquet: "Parquet", predictions: "Predictions", artifacts: "Model artifacts" };
    for (const [k, label] of Object.entries(linkNames)) {
      links.append(el("a", { href: d.links[k], target: "_blank", rel: "noopener" }, label + " ↓"));
    }

    host.append(el("article", { class: "ds-card" },
      art,
      el("div", { class: "ds-body" },
        el("div", { class: "ds-title-row" },
          el("h3", { class: "ds-title" }, d.name),
          el("span", { class: "badge" }, d.inspiration),
          el("span", { class: `badge ${d.medium.toLowerCase()}` }, d.medium)),
        stats, links)));
  }
}

/* ---------- models ---------- */

function renderModels() {
  const host = $("#model-grid");
  for (const key of NB.modelOrder) {
    const m = NB.models[key];
    host.append(el("article", { class: "model-card", style: `--mc:${m.color}` },
      el("div", { class: "model-head" },
        el("h3", { class: "model-name" }, m.name),
        el("span", { class: "model-params mono" }, m.params + " params")),
      el("div", { class: "model-tags" },
        el("span", {}, m.paradigm),
        el("span", {}, m.repr + " input")),
      el("p", { class: "model-desc" }, m.desc),
      el("a", { class: "model-src", href: m.src, target: "_blank", rel: "noopener" },
        "Source in GraphNeT →")));
  }
}

/* ---------- misc ---------- */

function setupTheme() {
  const root = document.documentElement;
  const stored = localStorage.getItem("nb-theme");
  if (stored) root.dataset.theme = stored;
  else if (!root.dataset.theme) root.dataset.theme = "dark";
  $("#theme-toggle").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("nb-theme", root.dataset.theme);
  });
}

function setupCopy() {
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = $(btn.dataset.copy).textContent;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "Copied ✓";
      } catch {
        btn.textContent = "Select & copy";
      }
      setTimeout(() => { btn.textContent = "Copy"; }, 1600);
    });
  });
}

renderHeroArt();
renderLeaderboard();
renderDatasets();
renderModels();
setupTheme();
setupCopy();
