// Generated from the NuBench paper (arXiv:2511.13111) LaTeX sources.
// Results tables were parsed programmatically; bold flags (b) mark the
// best model per metric as designated in the paper (incl. statistical ties).
const NB = {
 "paper": "https://arxiv.org/abs/2511.13111",
 "repo": "https://github.com/sevmag/NuBench",
 "graphnet": "https://github.com/graphnet-team/graphnet",
 "modelOrder": [
  "particlenet",
  "dynedge",
  "grit",
  "deepice"
 ],
 "models": {
  "particlenet": {
   "name": "ParticleNeT",
   "params": "0.3M",
   "paradigm": "GNN",
   "repr": "Graph",
   "color": "#8b95a5",
   "desc": "Dynamic graph CNN operating on point clouds, adapted from jet tagging. In active use within the KM3NeT collaboration.",
   "src": "https://github.com/graphnet-team/graphnet/blob/main/src/graphnet/models/gnn/particlenet.py"
  },
  "dynedge": {
   "name": "DynEdge",
   "params": "1.3M",
   "paradigm": "GNN",
   "repr": "Graph",
   "color": "#a78bfa",
   "desc": "Graph neural network built on dynamic edge convolutions, developed and used within the IceCube collaboration.",
   "src": "https://github.com/graphnet-team/graphnet/blob/main/src/graphnet/models/gnn/dynedge.py"
  },
  "grit": {
   "name": "GRIT",
   "params": "8.8M",
   "paradigm": "GNN + Transformer",
   "repr": "Graph",
   "color": "#34d399",
   "desc": "Graph transformer combining graph representations with attention, bridging GNN- and transformer-based methods. Not trained on Flower S due to computational cost.",
   "src": "https://github.com/graphnet-team/graphnet/blob/main/src/graphnet/models/gnn/grit.py"
  },
  "deepice": {
   "name": "DeepIce",
   "params": "114M",
   "paradigm": "Transformer",
   "repr": "Sequence",
   "desc": "Transformer encoder from a winning solution of the Kaggle “IceCube – Neutrinos in Deep Ice” challenge. Evaluated on direction reconstruction.",
   "color": "#fbbf24",
   "src": "https://github.com/graphnet-team/graphnet/blob/main/src/graphnet/models/gnn/icemix.py"
  }
 },
 "datasetOrder": [
  "flower_xl",
  "flower_l",
  "hexagon",
  "hexagon_ice_le",
  "flower_s",
  "cluster",
  "triangle"
 ],
 "datasets": {
  "flower_xl": {
   "name": "Flower XL",
   "inspiration": "TRIDENT",
   "medium": "Water",
   "events": "10.1M",
   "ccnc": "88 / 12",
   "strings": 1211,
   "oms": 24220,
   "erange": "10 GeV – 100 TeV",
   "spacing": "90 m",
   "geo": "sunflower",
   "links": {
    "sqlite": "https://sid.erda.dk/share_redirect/foVpx81yBz",
    "parquet": "https://sid.erda.dk/share_redirect/EjHdSveUxc",
    "predictions": "https://sid.erda.dk/share_redirect/AOjybKOo2Q",
    "artifacts": "https://sid.erda.dk/share_redirect/cR2WNVmk4l"
   }
  },
  "flower_l": {
   "name": "Flower L",
   "inspiration": "KM3NeT ARCA",
   "medium": "Water",
   "events": "24.0M",
   "ccnc": "35 / 65",
   "strings": 115,
   "oms": 2070,
   "erange": "10 GeV – 100 TeV",
   "spacing": "72 m",
   "geo": "sunflower",
   "links": {
    "sqlite": "https://sid.erda.dk/share_redirect/EJylHQXkBr",
    "parquet": "https://sid.erda.dk/share_redirect/HBIS5alCHj",
    "predictions": "https://sid.erda.dk/share_redirect/E0uj9YnZVZ",
    "artifacts": "https://sid.erda.dk/share_redirect/fklOMcPIyB"
   }
  },
  "hexagon": {
   "name": "Hexagon",
   "inspiration": "IceCube",
   "medium": "Water",
   "events": "20.5M",
   "ccnc": "48 / 52",
   "strings": 86,
   "oms": 5160,
   "erange": "10 GeV – 100 TeV",
   "spacing": "125 m",
   "geo": "hexagon",
   "links": {
    "sqlite": "https://sid.erda.dk/share_redirect/GTf1gIlBbZ",
    "parquet": "https://sid.erda.dk/share_redirect/GepbTY2MF4",
    "predictions": "https://sid.erda.dk/share_redirect/A4hMrsbbl3",
    "artifacts": "https://sid.erda.dk/share_redirect/BLx7Z17wQe"
   }
  },
  "hexagon_ice_le": {
   "name": "Hexagon Ice LE",
   "inspiration": "IceCube",
   "medium": "Ice",
   "events": "8.6M",
   "ccnc": "57 / 43",
   "strings": 86,
   "oms": 5160,
   "erange": "10 GeV – 1 TeV",
   "spacing": "125 m",
   "geo": "hexagon",
   "links": {
    "sqlite": "https://sid.erda.dk/share_redirect/b9VHSF9X64",
    "parquet": "https://sid.erda.dk/share_redirect/Cx2PVxHusa",
    "predictions": "https://sid.erda.dk/share_redirect/hCIaEIm3sn",
    "artifacts": "https://sid.erda.dk/share_redirect/gckjyhPlul"
   }
  },
  "flower_s": {
   "name": "Flower S",
   "inspiration": "KM3NeT ORCA",
   "medium": "Water",
   "events": "20.5M",
   "ccnc": "40 / 60",
   "strings": 150,
   "oms": 3300,
   "erange": "10 GeV – 1 TeV",
   "spacing": "12 m",
   "geo": "sunflower",
   "links": {
    "sqlite": "https://sid.erda.dk/share_redirect/cUPqNKMRbQ",
    "parquet": "https://sid.erda.dk/share_redirect/d08ELPHt2J",
    "predictions": "https://sid.erda.dk/share_redirect/Ao3E9h8wLr",
    "artifacts": "https://sid.erda.dk/share_redirect/c5iAXJ5F8d"
   }
  },
  "cluster": {
   "name": "Cluster",
   "inspiration": "Baikal-GVD",
   "medium": "Water",
   "events": "22.9M",
   "ccnc": "49 / 51",
   "strings": 8,
   "oms": 288,
   "erange": "10 GeV – 100 TeV",
   "spacing": "52 m",
   "geo": "cluster",
   "links": {
    "sqlite": "https://sid.erda.dk/share_redirect/EBamFwOU2D",
    "parquet": "https://sid.erda.dk/share_redirect/C01vI5u9BJ",
    "predictions": "https://sid.erda.dk/share_redirect/gZRbQvu0Ml",
    "artifacts": "https://sid.erda.dk/share_redirect/efqZPPTYBU"
   }
  },
  "triangle": {
   "name": "Triangle",
   "inspiration": "P-ONE",
   "medium": "Water",
   "events": "23.1M",
   "ccnc": "35 / 65",
   "strings": 3,
   "oms": 60,
   "erange": "10 GeV – 100 TeV",
   "spacing": "100 m",
   "geo": "triangle",
   "links": {
    "sqlite": "https://sid.erda.dk/share_redirect/ER3B0TlPqR",
    "parquet": "https://sid.erda.dk/share_redirect/ediHXAsygn",
    "predictions": "https://sid.erda.dk/share_redirect/DZFXwMcQmP",
    "artifacts": "https://sid.erda.dk/share_redirect/ctNHDFuzPN"
   }
  }
 },
 "results": {
  "energy": {
   "flower_xl": {
    "particlenet": [
     {
      "v": -8.92,
      "b": true,
      "e": 0.18
     },
     {
      "v": 120.16,
      "b": true,
      "e": 0.31
     },
     {
      "v": 18.18,
      "b": false,
      "e": 0.14
     },
     {
      "v": 101.61,
      "b": false,
      "e": 0.18
     },
     {
      "v": 3.78,
      "b": true,
      "e": 0.05
     },
     {
      "v": 90.11,
      "b": true,
      "e": 0.18
     }
    ],
    "dynedge": [
     {
      "v": -70.08,
      "b": false,
      "e": 0.37
     },
     {
      "v": 203.08,
      "b": false,
      "e": 0.54
     },
     {
      "v": -6.93,
      "b": true,
      "e": 0.18
     },
     {
      "v": 169.47,
      "b": false,
      "e": 0.58
     },
     {
      "v": 4.14,
      "b": false,
      "e": 0.04
     },
     {
      "v": 99.1,
      "b": false,
      "e": 0.33
     }
    ],
    "grit": [
     {
      "v": -9.37,
      "b": false,
      "e": 0.21
     },
     {
      "v": 122.63,
      "b": false,
      "e": 0.38
     },
     {
      "v": 21.15,
      "b": false,
      "e": 0.18
     },
     {
      "v": 99.74,
      "b": true,
      "e": 0.17
     },
     {
      "v": 9.33,
      "b": false,
      "e": 0.06
     },
     {
      "v": 90.42,
      "b": false,
      "e": 0.17
     }
    ]
   },
   "flower_l": {
    "particlenet": [
     {
      "v": -159.37,
      "b": false,
      "e": 0.34
     },
     {
      "v": 279.99,
      "b": false,
      "e": 0.62
     },
     {
      "v": -14.87,
      "b": false,
      "e": 0.11
     },
     {
      "v": 215.52,
      "b": false,
      "e": 0.42
     },
     {
      "v": 8.65,
      "b": false,
      "e": 0.03
     },
     {
      "v": 106.54,
      "b": true,
      "e": 0.21
     }
    ],
    "dynedge": [
     {
      "v": -106.46,
      "b": true,
      "e": 0.29
     },
     {
      "v": 224.34,
      "b": true,
      "e": 0.42
     },
     {
      "v": -8.03,
      "b": true,
      "e": 0.1
     },
     {
      "v": 189.24,
      "b": true,
      "e": 0.31
     },
     {
      "v": 3.13,
      "b": true,
      "e": 0.02
     },
     {
      "v": 107.41,
      "b": false,
      "e": 0.16
     }
    ],
    "grit": [
     {
      "v": -168.98,
      "b": false,
      "e": 0.29
     },
     {
      "v": 289.28,
      "b": false,
      "e": 0.63
     },
     {
      "v": -13.81,
      "b": false,
      "e": 0.1
     },
     {
      "v": 212.77,
      "b": false,
      "e": 0.43
     },
     {
      "v": 6.77,
      "b": false,
      "e": 0.03
     },
     {
      "v": 108.47,
      "b": false,
      "e": 0.21
     }
    ]
   },
   "hexagon": {
    "particlenet": [
     {
      "v": -72.71,
      "b": true,
      "e": 0.21
     },
     {
      "v": 202.89,
      "b": true,
      "e": 0.4
     },
     {
      "v": 15.56,
      "b": false,
      "e": 0.05
     },
     {
      "v": 141.0,
      "b": true,
      "e": 0.25
     },
     {
      "v": 26.23,
      "b": false,
      "e": 0.02
     },
     {
      "v": 86.25,
      "b": true,
      "e": 0.11
     }
    ],
    "dynedge": [
     {
      "v": -74.7,
      "b": false,
      "e": 0.17
     },
     {
      "v": 206.51,
      "b": false,
      "e": 0.42
     },
     {
      "v": 14.05,
      "b": false,
      "e": 0.07
     },
     {
      "v": 145.73,
      "b": false,
      "e": 0.28
     },
     {
      "v": 25.76,
      "b": true,
      "e": 0.01
     },
     {
      "v": 87.93,
      "b": false,
      "e": 0.11
     }
    ],
    "grit": [
     {
      "v": -85.85,
      "b": false,
      "e": 0.18
     },
     {
      "v": 226.39,
      "b": false,
      "e": 0.46
     },
     {
      "v": 6.04,
      "b": true,
      "e": 0.1
     },
     {
      "v": 156.1,
      "b": false,
      "e": 0.23
     },
     {
      "v": 32.44,
      "b": false,
      "e": 0.03
     },
     {
      "v": 94.11,
      "b": false,
      "e": 0.11
     }
    ]
   },
   "hexagon_ice_le": {
    "particlenet": [
     {
      "v": -90.01,
      "b": true,
      "e": 0.17
     },
     {
      "v": 226.98,
      "b": true,
      "e": 0.42
     },
     {
      "v": 13.98,
      "b": false,
      "e": 0.04
     },
     {
      "v": 98.35,
      "b": true,
      "e": 0.07
     },
     null,
     null
    ],
    "dynedge": [
     {
      "v": -95.05,
      "b": false,
      "e": 0.14
     },
     {
      "v": 240.7,
      "b": false,
      "e": 0.42
     },
     {
      "v": 12.27,
      "b": true,
      "e": 0.04
     },
     {
      "v": 101.0,
      "b": false,
      "e": 0.07
     },
     null,
     null
    ],
    "grit": [
     {
      "v": -90.85,
      "b": false,
      "e": 0.18
     },
     {
      "v": 228.06,
      "b": false,
      "e": 0.36
     },
     {
      "v": 14.58,
      "b": false,
      "e": 0.04
     },
     {
      "v": 98.41,
      "b": false,
      "e": 0.06
     },
     null,
     null
    ]
   },
   "flower_s": {
    "particlenet": [
     {
      "v": -29.29,
      "b": true,
      "e": 0.08
     },
     {
      "v": 135.74,
      "b": true,
      "e": 0.12
     },
     {
      "v": 4.44,
      "b": true,
      "e": 0.02
     },
     {
      "v": 78.93,
      "b": true,
      "e": 0.09
     },
     null,
     null
    ],
    "dynedge": [
     {
      "v": -30.38,
      "b": false,
      "e": 0.07
     },
     {
      "v": 138.61,
      "b": false,
      "e": 0.14
     },
     {
      "v": 4.44,
      "b": true,
      "e": 0.02
     },
     {
      "v": 79.85,
      "b": false,
      "e": 0.1
     },
     null,
     null
    ]
   },
   "cluster": {
    "particlenet": [
     {
      "v": -48.44,
      "b": false,
      "e": 0.09
     },
     {
      "v": 145.94,
      "b": false,
      "e": 0.13
     },
     {
      "v": 11.91,
      "b": false,
      "e": 0.05
     },
     {
      "v": 151.16,
      "b": false,
      "e": 0.34
     },
     {
      "v": 15.84,
      "b": false,
      "e": 0.02
     },
     {
      "v": 90.17,
      "b": true,
      "e": 0.17
     }
    ],
    "dynedge": [
     {
      "v": -46.42,
      "b": true,
      "e": 0.09
     },
     {
      "v": 145.23,
      "b": true,
      "e": 0.15
     },
     {
      "v": 12.57,
      "b": false,
      "e": 0.05
     },
     {
      "v": 148.77,
      "b": true,
      "e": 0.27
     },
     {
      "v": 15.66,
      "b": true,
      "e": 0.02
     },
     {
      "v": 90.3,
      "b": true,
      "e": 0.16
     }
    ],
    "grit": [
     {
      "v": -58.18,
      "b": false,
      "e": 0.12
     },
     {
      "v": 164.38,
      "b": false,
      "e": 0.15
     },
     {
      "v": 10.27,
      "b": true,
      "e": 0.09
     },
     {
      "v": 163.84,
      "b": false,
      "e": 0.25
     },
     {
      "v": 17.96,
      "b": false,
      "e": 0.06
     },
     {
      "v": 112.7,
      "b": false,
      "e": 0.13
     }
    ]
   },
   "triangle": {
    "particlenet": [
     {
      "v": -153.37,
      "b": true,
      "e": 0.45
     },
     {
      "v": 341.05,
      "b": true,
      "e": 1.03
     },
     {
      "v": -21.32,
      "b": true,
      "e": 0.16
     },
     {
      "v": 213.14,
      "b": false,
      "e": 0.31
     },
     {
      "v": 14.54,
      "b": false,
      "e": 0.04
     },
     {
      "v": 110.3,
      "b": true,
      "e": 0.12
     }
    ],
    "dynedge": [
     {
      "v": -196.2,
      "b": false,
      "e": 0.52
     },
     {
      "v": 397.03,
      "b": false,
      "e": 1.07
     },
     {
      "v": -27.62,
      "b": false,
      "e": 0.13
     },
     {
      "v": 219.81,
      "b": false,
      "e": 0.37
     },
     {
      "v": 5.03,
      "b": true,
      "e": 0.03
     },
     {
      "v": 119.68,
      "b": false,
      "e": 0.13
     }
    ],
    "grit": [
     {
      "v": -160.75,
      "b": false,
      "e": 0.44
     },
     {
      "v": 341.64,
      "b": true,
      "e": 1.0
     },
     {
      "v": -21.24,
      "b": true,
      "e": 0.12
     },
     {
      "v": 198.59,
      "b": true,
      "e": 0.39
     },
     {
      "v": 5.76,
      "b": false,
      "e": 0.04
     },
     {
      "v": 117.82,
      "b": false,
      "e": 0.11
     }
    ]
   }
  },
  "direction": {
   "flower_xl": {
    "particlenet": [
     {
      "cc": {
       "v": 14.33,
       "b": false
      },
      "nc": {
       "v": 33.38,
       "b": true
      }
     },
     {
      "cc": {
       "v": 1.56,
       "b": false
      },
      "nc": {
       "v": 0.3,
       "b": false
      }
     },
     {
      "cc": {
       "v": 21.75,
       "b": false
      },
      "nc": {
       "v": 6.54,
       "b": false
      }
     },
     {
      "cc": {
       "v": 1.6,
       "b": false
      },
      "nc": {
       "v": 3.81,
       "b": false
      }
     },
     {
      "cc": {
       "v": 27.23,
       "b": false
      },
      "nc": {
       "v": 6.74,
       "b": false
      }
     },
     {
      "cc": {
       "v": 91.05,
       "b": false
      },
      "nc": {
       "v": 61.8,
       "b": false
      }
     }
    ],
    "dynedge": [
     {
      "cc": {
       "v": 16.22,
       "b": false
      },
      "nc": {
       "v": 33.47,
       "b": false
      }
     },
     {
      "cc": {
       "v": 1.0,
       "b": false
      },
      "nc": {
       "v": 0.3,
       "b": false
      }
     },
     {
      "cc": {
       "v": 16.8,
       "b": false
      },
      "nc": {
       "v": 5.98,
       "b": false
      }
     },
     {
      "cc": {
       "v": 2.03,
       "b": false
      },
      "nc": {
       "v": 4.07,
       "b": false
      }
     },
     {
      "cc": {
       "v": 19.43,
       "b": false
      },
      "nc": {
       "v": 5.92,
       "b": false
      }
     },
     {
      "cc": {
       "v": 85.79,
       "b": false
      },
      "nc": {
       "v": 59.1,
       "b": false
      }
     }
    ],
    "deepice": [
     {
      "cc": {
       "v": 14.23,
       "b": true
      },
      "nc": {
       "v": 33.6,
       "b": false
      }
     },
     {
      "cc": {
       "v": 2.12,
       "b": true
      },
      "nc": {
       "v": 0.39,
       "b": true
      }
     },
     {
      "cc": {
       "v": 24.11,
       "b": true
      },
      "nc": {
       "v": 7.01,
       "b": true
      }
     },
     {
      "cc": {
       "v": 1.29,
       "b": true
      },
      "nc": {
       "v": 3.21,
       "b": true
      }
     },
     {
      "cc": {
       "v": 36.65,
       "b": true
      },
      "nc": {
       "v": 9.98,
       "b": true
      }
     },
     {
      "cc": {
       "v": 93.23,
       "b": true
      },
      "nc": {
       "v": 67.15,
       "b": true
      }
     }
    ]
   },
   "flower_l": {
    "particlenet": [
     {
      "cc": {
       "v": 13.21,
       "b": false
      },
      "nc": {
       "v": 20.66,
       "b": false
      }
     },
     {
      "cc": {
       "v": 1.26,
       "b": false
      },
      "nc": {
       "v": 0.6,
       "b": false
      }
     },
     {
      "cc": {
       "v": 20.45,
       "b": false
      },
      "nc": {
       "v": 11.54,
       "b": false
      }
     },
     {
      "cc": {
       "v": 2.12,
       "b": false
      },
      "nc": {
       "v": 3.5,
       "b": false
      }
     },
     {
      "cc": {
       "v": 18.36,
       "b": false
      },
      "nc": {
       "v": 8.27,
       "b": false
      }
     },
     {
      "cc": {
       "v": 83.66,
       "b": false
      },
      "nc": {
       "v": 64.89,
       "b": false
      }
     }
    ],
    "dynedge": [
     {
      "cc": {
       "v": 11.6,
       "b": false
      },
      "nc": {
       "v": 18.95,
       "b": false
      }
     },
     {
      "cc": {
       "v": 2.12,
       "b": false
      },
      "nc": {
       "v": 0.84,
       "b": false
      }
     },
     {
      "cc": {
       "v": 26.46,
       "b": false
      },
      "nc": {
       "v": 14.2,
       "b": false
      }
     },
     {
      "cc": {
       "v": 1.54,
       "b": false
      },
      "nc": {
       "v": 2.9,
       "b": false
      }
     },
     {
      "cc": {
       "v": 30.67,
       "b": false
      },
      "nc": {
       "v": 11.99,
       "b": false
      }
     },
     {
      "cc": {
       "v": 88.76,
       "b": false
      },
      "nc": {
       "v": 70.54,
       "b": false
      }
     }
    ],
    "grit": [
     {
      "cc": {
       "v": 10.03,
       "b": false
      },
      "nc": {
       "v": 17.54,
       "b": false
      }
     },
     {
      "cc": {
       "v": 4.51,
       "b": false
      },
      "nc": {
       "v": 1.25,
       "b": false
      }
     },
     {
      "cc": {
       "v": 33.09,
       "b": false
      },
      "nc": {
       "v": 17.87,
       "b": false
      }
     },
     {
      "cc": {
       "v": 0.99,
       "b": false
      },
      "nc": {
       "v": 2.14,
       "b": false
      }
     },
     {
      "cc": {
       "v": 50.41,
       "b": false
      },
      "nc": {
       "v": 21.11,
       "b": false
      }
     },
     {
      "cc": {
       "v": 92.12,
       "b": false
      },
      "nc": {
       "v": 77.03,
       "b": false
      }
     }
    ],
    "deepice": [
     {
      "cc": {
       "v": 9.92,
       "b": true
      },
      "nc": {
       "v": 17.19,
       "b": true
      }
     },
     {
      "cc": {
       "v": 5.81,
       "b": true
      },
      "nc": {
       "v": 1.32,
       "b": true
      }
     },
     {
      "cc": {
       "v": 33.98,
       "b": true
      },
      "nc": {
       "v": 18.47,
       "b": true
      }
     },
     {
      "cc": {
       "v": 0.66,
       "b": true
      },
      "nc": {
       "v": 1.86,
       "b": true
      }
     },
     {
      "cc": {
       "v": 65.13,
       "b": true
      },
      "nc": {
       "v": 28.14,
       "b": true
      }
     },
     {
      "cc": {
       "v": 92.87,
       "b": true
      },
      "nc": {
       "v": 78.44,
       "b": true
      }
     }
    ]
   },
   "hexagon": {
    "particlenet": [
     {
      "cc": {
       "v": 16.91,
       "b": false
      },
      "nc": {
       "v": 32.44,
       "b": false
      }
     },
     {
      "cc": {
       "v": 1.35,
       "b": false
      },
      "nc": {
       "v": 0.45,
       "b": false
      }
     },
     {
      "cc": {
       "v": 19.8,
       "b": false
      },
      "nc": {
       "v": 8.38,
       "b": false
      }
     },
     {
      "cc": {
       "v": 2.03,
       "b": false
      },
      "nc": {
       "v": 3.86,
       "b": false
      }
     },
     {
      "cc": {
       "v": 19.93,
       "b": false
      },
      "nc": {
       "v": 8.1,
       "b": false
      }
     },
     {
      "cc": {
       "v": 82.15,
       "b": false
      },
      "nc": {
       "v": 59.55,
       "b": false
      }
     }
    ],
    "dynedge": [
     {
      "cc": {
       "v": 16.61,
       "b": false
      },
      "nc": {
       "v": 31.92,
       "b": false
      }
     },
     {
      "cc": {
       "v": 1.5,
       "b": false
      },
      "nc": {
       "v": 0.49,
       "b": false
      }
     },
     {
      "cc": {
       "v": 20.89,
       "b": false
      },
      "nc": {
       "v": 8.94,
       "b": false
      }
     },
     {
      "cc": {
       "v": 1.76,
       "b": false
      },
      "nc": {
       "v": 3.48,
       "b": false
      }
     },
     {
      "cc": {
       "v": 25.62,
       "b": false
      },
      "nc": {
       "v": 10.25,
       "b": false
      }
     },
     {
      "cc": {
       "v": 83.92,
       "b": false
      },
      "nc": {
       "v": 62.12,
       "b": false
      }
     }
    ],
    "grit": [
     {
      "cc": {
       "v": 16.52,
       "b": false
      },
      "nc": {
       "v": 32.34,
       "b": false
      }
     },
     {
      "cc": {
       "v": 1.79,
       "b": false
      },
      "nc": {
       "v": 0.54,
       "b": false
      }
     },
     {
      "cc": {
       "v": 22.17,
       "b": false
      },
      "nc": {
       "v": 9.27,
       "b": false
      }
     },
     {
      "cc": {
       "v": 1.83,
       "b": false
      },
      "nc": {
       "v": 3.42,
       "b": false
      }
     },
     {
      "cc": {
       "v": 23.33,
       "b": false
      },
      "nc": {
       "v": 10.03,
       "b": false
      }
     },
     {
      "cc": {
       "v": 84.16,
       "b": false
      },
      "nc": {
       "v": 63.15,
       "b": false
      }
     }
    ],
    "deepice": [
     {
      "cc": {
       "v": 15.02,
       "b": true
      },
      "nc": {
       "v": 30.73,
       "b": true
      }
     },
     {
      "cc": {
       "v": 3.44,
       "b": true
      },
      "nc": {
       "v": 0.82,
       "b": true
      }
     },
     {
      "cc": {
       "v": 27.15,
       "b": true
      },
      "nc": {
       "v": 11.39,
       "b": true
      }
     },
     {
      "cc": {
       "v": 0.89,
       "b": true
      },
      "nc": {
       "v": 2.53,
       "b": true
      }
     },
     {
      "cc": {
       "v": 54.46,
       "b": true
      },
      "nc": {
       "v": 20.08,
       "b": true
      }
     },
     {
      "cc": {
       "v": 88.23,
       "b": true
      },
      "nc": {
       "v": 68.74,
       "b": true
      }
     }
    ]
   },
   "hexagon_ice_le": {
    "particlenet": [
     {
      "cc": {
       "v": 23.84,
       "b": false
      },
      "nc": {
       "v": 56.18,
       "b": false
      }
     },
     {
      "cc": {
       "v": 1.81,
       "b": false
      },
      "nc": {
       "v": 0.04,
       "b": false
      }
     },
     {
      "cc": {
       "v": 20.98,
       "b": false
      },
      "nc": {
       "v": 0.97,
       "b": false
      }
     },
     null,
     null,
     null
    ],
    "dynedge": [
     {
      "cc": {
       "v": 23.6,
       "b": false
      },
      "nc": {
       "v": 56.12,
       "b": false
      }
     },
     {
      "cc": {
       "v": 2.26,
       "b": false
      },
      "nc": {
       "v": 0.04,
       "b": false
      }
     },
     {
      "cc": {
       "v": 22.24,
       "b": false
      },
      "nc": {
       "v": 1.03,
       "b": false
      }
     },
     null,
     null,
     null
    ],
    "grit": [
     {
      "cc": {
       "v": 21.91,
       "b": true
      },
      "nc": {
       "v": 54.87,
       "b": true
      }
     },
     {
      "cc": {
       "v": 2.71,
       "b": true
      },
      "nc": {
       "v": 0.05,
       "b": true
      }
     },
     {
      "cc": {
       "v": 23.94,
       "b": true
      },
      "nc": {
       "v": 1.28,
       "b": true
      }
     },
     null,
     null,
     null
    ],
    "deepice": [
     {
      "cc": {
       "v": 23.75,
       "b": false
      },
      "nc": {
       "v": 56.21,
       "b": false
      }
     },
     {
      "cc": {
       "v": 2.15,
       "b": false
      },
      "nc": {
       "v": 0.05,
       "b": true
      }
     },
     {
      "cc": {
       "v": 21.51,
       "b": false
      },
      "nc": {
       "v": 1.08,
       "b": false
      }
     },
     null,
     null,
     null
    ]
   },
   "flower_s": {
    "particlenet": [
     {
      "cc": {
       "v": 2.27,
       "b": false
      },
      "nc": {
       "v": 6.73,
       "b": false
      }
     },
     {
      "cc": {
       "v": 18.37,
       "b": false
      },
      "nc": {
       "v": 5.19,
       "b": false
      }
     },
     {
      "cc": {
       "v": 77.24,
       "b": false
      },
      "nc": {
       "v": 40.23,
       "b": false
      }
     },
     null,
     null,
     null
    ],
    "dynedge": [
     {
      "cc": {
       "v": 2.13,
       "b": false
      },
      "nc": {
       "v": 6.66,
       "b": false
      }
     },
     {
      "cc": {
       "v": 20.67,
       "b": false
      },
      "nc": {
       "v": 5.48,
       "b": false
      }
     },
     {
      "cc": {
       "v": 78.4,
       "b": false
      },
      "nc": {
       "v": 40.7,
       "b": false
      }
     },
     null,
     null,
     null
    ],
    "deepice": [
     {
      "cc": {
       "v": 1.82,
       "b": true
      },
      "nc": {
       "v": 6.38,
       "b": true
      }
     },
     {
      "cc": {
       "v": 26.32,
       "b": true
      },
      "nc": {
       "v": 7.11,
       "b": true
      }
     },
     {
      "cc": {
       "v": 81.04,
       "b": true
      },
      "nc": {
       "v": 42.29,
       "b": true
      }
     },
     null,
     null,
     null
    ]
   },
   "cluster": {
    "particlenet": [
     {
      "cc": {
       "v": 8.29,
       "b": false
      },
      "nc": {
       "v": 14.55,
       "b": false
      }
     },
     {
      "cc": {
       "v": 2.58,
       "b": false
      },
      "nc": {
       "v": 1.3,
       "b": false
      }
     },
     {
      "cc": {
       "v": 32.69,
       "b": false
      },
      "nc": {
       "v": 19.83,
       "b": false
      }
     },
     {
      "cc": {
       "v": 2.06,
       "b": false
      },
      "nc": {
       "v": 2.47,
       "b": false
      }
     },
     {
      "cc": {
       "v": 17.83,
       "b": false
      },
      "nc": {
       "v": 14.08,
       "b": false
      }
     },
     {
      "cc": {
       "v": 86.93,
       "b": false
      },
      "nc": {
       "v": 78.43,
       "b": false
      }
     }
    ],
    "dynedge": [
     {
      "cc": {
       "v": 7.66,
       "b": false
      },
      "nc": {
       "v": 13.82,
       "b": false
      }
     },
     {
      "cc": {
       "v": 3.25,
       "b": false
      },
      "nc": {
       "v": 1.7,
       "b": false
      }
     },
     {
      "cc": {
       "v": 36.03,
       "b": false
      },
      "nc": {
       "v": 22.12,
       "b": false
      }
     },
     {
      "cc": {
       "v": 1.88,
       "b": false
      },
      "nc": {
       "v": 2.12,
       "b": false
      }
     },
     {
      "cc": {
       "v": 21.11,
       "b": false
      },
      "nc": {
       "v": 18.67,
       "b": false
      }
     },
     {
      "cc": {
       "v": 88.02,
       "b": false
      },
      "nc": {
       "v": 81.07,
       "b": false
      }
     }
    ],
    "grit": [
     {
      "cc": {
       "v": 7.66,
       "b": false
      },
      "nc": {
       "v": 13.74,
       "b": false
      }
     },
     {
      "cc": {
       "v": 2.88,
       "b": false
      },
      "nc": {
       "v": 1.48,
       "b": false
      }
     },
     {
      "cc": {
       "v": 35.14,
       "b": false
      },
      "nc": {
       "v": 21.62,
       "b": false
      }
     },
     {
      "cc": {
       "v": 2.18,
       "b": false
      },
      "nc": {
       "v": 2.6,
       "b": false
      }
     },
     {
      "cc": {
       "v": 17.21,
       "b": false
      },
      "nc": {
       "v": 13.64,
       "b": false
      }
     },
     {
      "cc": {
       "v": 84.45,
       "b": false
      },
      "nc": {
       "v": 77.34,
       "b": false
      }
     }
    ],
    "deepice": [
     {
      "cc": {
       "v": 6.25,
       "b": true
      },
      "nc": {
       "v": 12.15,
       "b": true
      }
     },
     {
      "cc": {
       "v": 7.83,
       "b": true
      },
      "nc": {
       "v": 3.0,
       "b": true
      }
     },
     {
      "cc": {
       "v": 43.79,
       "b": true
      },
      "nc": {
       "v": 27.16,
       "b": true
      }
     },
     {
      "cc": {
       "v": 1.22,
       "b": true
      },
      "nc": {
       "v": 1.35,
       "b": true
      }
     },
     {
      "cc": {
       "v": 40.45,
       "b": true
      },
      "nc": {
       "v": 37.53,
       "b": true
      }
     },
     {
      "cc": {
       "v": 92.0,
       "b": true
      },
      "nc": {
       "v": 86.23,
       "b": true
      }
     }
    ]
   },
   "triangle": {
    "particlenet": [
     {
      "cc": {
       "v": 30.47,
       "b": false
      },
      "nc": {
       "v": 41.35,
       "b": false
      }
     },
     {
      "cc": {
       "v": 0.22,
       "b": false
      },
      "nc": {
       "v": 0.1,
       "b": false
      }
     },
     {
      "cc": {
       "v": 4.9,
       "b": false
      },
      "nc": {
       "v": 2.24,
       "b": false
      }
     },
     {
      "cc": {
       "v": 6.41,
       "b": false
      },
      "nc": {
       "v": 9.59,
       "b": false
      }
     },
     {
      "cc": {
       "v": 2.66,
       "b": false
      },
      "nc": {
       "v": 1.52,
       "b": false
      }
     },
     {
      "cc": {
       "v": 38.81,
       "b": false
      },
      "nc": {
       "v": 25.55,
       "b": false
      }
     }
    ],
    "dynedge": [
     {
      "cc": {
       "v": 29.25,
       "b": false
      },
      "nc": {
       "v": 39.94,
       "b": false
      }
     },
     {
      "cc": {
       "v": 0.48,
       "b": false
      },
      "nc": {
       "v": 0.16,
       "b": false
      }
     },
     {
      "cc": {
       "v": 8.16,
       "b": false
      },
      "nc": {
       "v": 3.28,
       "b": false
      }
     },
     {
      "cc": {
       "v": 4.03,
       "b": false
      },
      "nc": {
       "v": 6.22,
       "b": false
      }
     },
     {
      "cc": {
       "v": 7.93,
       "b": false
      },
      "nc": {
       "v": 4.9,
       "b": false
      }
     },
     {
      "cc": {
       "v": 57.53,
       "b": false
      },
      "nc": {
       "v": 43.18,
       "b": false
      }
     }
    ],
    "grit": [
     {
      "cc": {
       "v": 28.36,
       "b": true
      },
      "nc": {
       "v": 39.33,
       "b": true
      }
     },
     {
      "cc": {
       "v": 0.94,
       "b": true
      },
      "nc": {
       "v": 0.21,
       "b": true
      }
     },
     {
      "cc": {
       "v": 10.28,
       "b": true
      },
      "nc": {
       "v": 3.87,
       "b": true
      }
     },
     {
      "cc": {
       "v": 2.96,
       "b": true
      },
      "nc": {
       "v": 5.26,
       "b": true
      }
     },
     {
      "cc": {
       "v": 18.21,
       "b": true
      },
      "nc": {
       "v": 8.39,
       "b": true
      }
     },
     {
      "cc": {
       "v": 64.59,
       "b": true
      },
      "nc": {
       "v": 48.59,
       "b": true
      }
     }
    ],
    "deepice": [
     {
      "cc": {
       "v": 28.49,
       "b": false
      },
      "nc": {
       "v": 39.51,
       "b": false
      }
     },
     {
      "cc": {
       "v": 0.72,
       "b": false
      },
      "nc": {
       "v": 0.17,
       "b": false
      }
     },
     {
      "cc": {
       "v": 9.35,
       "b": false
      },
      "nc": {
       "v": 3.6,
       "b": false
      }
     },
     {
      "cc": {
       "v": 3.08,
       "b": false
      },
      "nc": {
       "v": 5.38,
       "b": false
      }
     },
     {
      "cc": {
       "v": 16.17,
       "b": false
      },
      "nc": {
       "v": 7.64,
       "b": false
      }
     },
     {
      "cc": {
       "v": 64.03,
       "b": false
      },
      "nc": {
       "v": 47.88,
       "b": false
      }
     }
    ]
   }
  },
  "vertex": {
   "flower_xl": {
    "particlenet": [
     {
      "v": 42.9,
      "b": false
     },
     {
      "v": 16.13,
      "b": false
     },
     {
      "v": 36.77,
      "b": false
     },
     {
      "v": 36.82,
      "b": false
     },
     {
      "v": 16.55,
      "b": false
     },
     {
      "v": 30.54,
      "b": false
     }
    ],
    "dynedge": [
     {
      "v": 11.98,
      "b": true
     },
     {
      "v": 3.04,
      "b": true
     },
     {
      "v": 10.06,
      "b": true
     },
     {
      "v": 4.31,
      "b": true
     },
     {
      "v": 1.8,
      "b": true
     },
     {
      "v": 3.35,
      "b": true
     }
    ],
    "grit": [
     {
      "v": 35.51,
      "b": false
     },
     {
      "v": 7.68,
      "b": false
     },
     {
      "v": 32.86,
      "b": false
     },
     {
      "v": 30.0,
      "b": false
     },
     {
      "v": 6.91,
      "b": false
     },
     {
      "v": 28.09,
      "b": false
     }
    ]
   },
   "flower_l": {
    "particlenet": [
     {
      "v": 17.47,
      "b": false
     },
     {
      "v": 6.15,
      "b": false
     },
     {
      "v": 14.09,
      "b": false
     },
     {
      "v": 10.2,
      "b": false
     },
     {
      "v": 4.36,
      "b": false
     },
     {
      "v": 7.84,
      "b": false
     }
    ],
    "dynedge": [
     {
      "v": 6.52,
      "b": true
     },
     {
      "v": 1.96,
      "b": true
     },
     {
      "v": 5.28,
      "b": true
     },
     {
      "v": 2.2,
      "b": true
     },
     {
      "v": 0.88,
      "b": true
     },
     {
      "v": 1.75,
      "b": true
     }
    ],
    "grit": [
     {
      "v": 13.59,
      "b": false
     },
     {
      "v": 6.5,
      "b": false
     },
     {
      "v": 9.69,
      "b": false
     },
     {
      "v": 10.08,
      "b": false
     },
     {
      "v": 6.01,
      "b": false
     },
     {
      "v": 6.46,
      "b": false
     }
    ]
   },
   "hexagon": {
    "particlenet": [
     {
      "v": 25.46,
      "b": false
     },
     {
      "v": 6.96,
      "b": false
     },
     {
      "v": 22.0,
      "b": false
     },
     {
      "v": 13.99,
      "b": false
     },
     {
      "v": 5.08,
      "b": false
     },
     {
      "v": 11.45,
      "b": false
     }
    ],
    "dynedge": [
     {
      "v": 12.02,
      "b": true
     },
     {
      "v": 2.09,
      "b": true
     },
     {
      "v": 10.33,
      "b": true
     },
     {
      "v": 2.37,
      "b": true
     },
     {
      "v": 0.87,
      "b": true
     },
     {
      "v": 1.93,
      "b": true
     }
    ],
    "grit": [
     {
      "v": 41.3,
      "b": false
     },
     {
      "v": 26.43,
      "b": false
     },
     {
      "v": 25.72,
      "b": false
     },
     {
      "v": 38.2,
      "b": false
     },
     {
      "v": 28.14,
      "b": false
     },
     {
      "v": 22.06,
      "b": false
     }
    ]
   },
   "hexagon_ice_le": {
    "particlenet": [
     {
      "v": 28.73,
      "b": false
     },
     {
      "v": 8.49,
      "b": false
     },
     {
      "v": 24.2,
      "b": false
     },
     null,
     null,
     null
    ],
    "dynedge": [
     {
      "v": 26.04,
      "b": true
     },
     {
      "v": 6.84,
      "b": true
     },
     {
      "v": 21.94,
      "b": true
     },
     null,
     null,
     null
    ],
    "grit": [
     {
      "v": 30.11,
      "b": false
     },
     {
      "v": 9.39,
      "b": false
     },
     {
      "v": 25.25,
      "b": false
     },
     null,
     null,
     null
    ]
   },
   "flower_s": {
    "particlenet": [
     {
      "v": 2.64,
      "b": false
     },
     {
      "v": 1.3,
      "b": false
     },
     {
      "v": 1.9,
      "b": false
     },
     null,
     null,
     null
    ],
    "dynedge": [
     {
      "v": 1.55,
      "b": true
     },
     {
      "v": 0.63,
      "b": true
     },
     {
      "v": 1.25,
      "b": true
     },
     null,
     null,
     null
    ]
   },
   "cluster": {
    "particlenet": [
     {
      "v": 4.3,
      "b": false
     },
     {
      "v": 1.84,
      "b": false
     },
     {
      "v": 3.16,
      "b": false
     },
     {
      "v": 2.25,
      "b": false
     },
     {
      "v": 1.45,
      "b": false
     },
     {
      "v": 1.15,
      "b": false
     }
    ],
    "dynedge": [
     {
      "v": 2.97,
      "b": true
     },
     {
      "v": 0.93,
      "b": true
     },
     {
      "v": 2.52,
      "b": true
     },
     {
      "v": 1.29,
      "b": true
     },
     {
      "v": 0.44,
      "b": true
     },
     {
      "v": 1.09,
      "b": true
     }
    ],
    "grit": [
     {
      "v": 16.43,
      "b": false
     },
     {
      "v": 5.04,
      "b": false
     },
     {
      "v": 14.23,
      "b": false
     },
     {
      "v": 13.06,
      "b": false
     },
     {
      "v": 4.31,
      "b": false
     },
     {
      "v": 10.89,
      "b": false
     }
    ]
   },
   "triangle": {
    "particlenet": [
     {
      "v": 21.74,
      "b": false
     },
     {
      "v": 6.67,
      "b": false
     },
     {
      "v": 18.27,
      "b": false
     },
     {
      "v": 9.27,
      "b": false
     },
     {
      "v": 4.56,
      "b": false
     },
     {
      "v": 5.88,
      "b": false
     }
    ],
    "dynedge": [
     {
      "v": 18.37,
      "b": true
     },
     {
      "v": 2.97,
      "b": true
     },
     {
      "v": 16.07,
      "b": true
     },
     {
      "v": 2.9,
      "b": true
     },
     {
      "v": 0.81,
      "b": true
     },
     {
      "v": 2.54,
      "b": false
     }
    ],
    "grit": [
     {
      "v": 19.32,
      "b": false
     },
     {
      "v": 3.66,
      "b": false
     },
     {
      "v": 16.96,
      "b": false
     },
     {
      "v": 3.6,
      "b": false
     },
     {
      "v": 1.95,
      "b": false
     },
     {
      "v": 2.34,
      "b": true
     }
    ]
   }
  },
  "inelasticity": {
   "flower_xl": {
    "particlenet": [
     {
      "v": 0.249,
      "b": false
     },
     {
      "v": 0.2981,
      "b": false
     },
     {
      "v": 0.1124,
      "b": false
     },
     {
      "v": 0.1904,
      "b": false
     },
     {
      "v": 0.0398,
      "b": false
     },
     {
      "v": 0.0958,
      "b": false
     }
    ],
    "dynedge": [
     {
      "v": 0.181,
      "b": true
     },
     {
      "v": 0.237,
      "b": true
     },
     {
      "v": 0.1399,
      "b": false
     },
     {
      "v": 0.2423,
      "b": false
     },
     {
      "v": 0.0577,
      "b": false
     },
     {
      "v": 0.1348,
      "b": false
     }
    ],
    "grit": [
     {
      "v": 0.2467,
      "b": false
     },
     {
      "v": 0.2932,
      "b": false
     },
     {
      "v": 0.1088,
      "b": true
     },
     {
      "v": 0.1843,
      "b": true
     },
     {
      "v": 0.0345,
      "b": true
     },
     {
      "v": 0.0836,
      "b": true
     }
    ]
   },
   "flower_l": {
    "particlenet": [
     {
      "v": 0.5185,
      "b": false
     },
     {
      "v": 0.4921,
      "b": false
     },
     {
      "v": 0.127,
      "b": false
     },
     {
      "v": 0.2239,
      "b": false
     },
     {
      "v": 0.0436,
      "b": true
     },
     {
      "v": 0.1053,
      "b": true
     }
    ],
    "dynedge": [
     {
      "v": 0.1812,
      "b": true
     },
     {
      "v": 0.2405,
      "b": false
     },
     {
      "v": 0.1107,
      "b": true
     },
     {
      "v": 0.2065,
      "b": true
     },
     {
      "v": 0.0435,
      "b": true
     },
     {
      "v": 0.1071,
      "b": false
     }
    ],
    "grit": [
     {
      "v": 0.1821,
      "b": false
     },
     {
      "v": 0.2352,
      "b": true
     },
     {
      "v": 0.1231,
      "b": false
     },
     {
      "v": 0.2197,
      "b": false
     },
     {
      "v": 0.0464,
      "b": false
     },
     {
      "v": 0.1124,
      "b": false
     }
    ]
   },
   "hexagon": {
    "particlenet": [
     {
      "v": 0.1861,
      "b": false
     },
     {
      "v": 0.2441,
      "b": false
     },
     {
      "v": 0.1193,
      "b": false
     },
     {
      "v": 0.2178,
      "b": false
     },
     {
      "v": 0.0446,
      "b": true
     },
     {
      "v": 0.1145,
      "b": true
     }
    ],
    "dynedge": [
     {
      "v": 0.1851,
      "b": true
     },
     {
      "v": 0.2438,
      "b": true
     },
     {
      "v": 0.1182,
      "b": true
     },
     {
      "v": 0.2171,
      "b": true
     },
     {
      "v": 0.0454,
      "b": false
     },
     {
      "v": 0.1167,
      "b": false
     }
    ],
    "grit": [
     {
      "v": 0.4912,
      "b": false
     },
     {
      "v": 0.484,
      "b": false
     },
     {
      "v": 0.1554,
      "b": false
     },
     {
      "v": 0.2798,
      "b": false
     },
     {
      "v": 0.0545,
      "b": false
     },
     {
      "v": 0.131,
      "b": false
     }
    ]
   },
   "flower_s": {
    "particlenet": [
     {
      "v": 0.2653,
      "b": false
     },
     {
      "v": 0.5384,
      "b": false
     },
     {
      "v": 0.0554,
      "b": false
     },
     {
      "v": 0.0811,
      "b": false
     },
     null,
     null
    ],
    "dynedge": [
     {
      "v": 0.1276,
      "b": true
     },
     {
      "v": 0.2453,
      "b": true
     },
     {
      "v": 0.0405,
      "b": true
     },
     {
      "v": 0.0713,
      "b": true
     },
     null,
     null
    ]
   },
   "cluster": {
    "particlenet": [
     {
      "v": 0.3591,
      "b": false
     },
     {
      "v": 0.4713,
      "b": false
     },
     {
      "v": 0.077,
      "b": true
     },
     {
      "v": 0.1193,
      "b": true
     },
     {
      "v": 0.0345,
      "b": true
     },
     {
      "v": 0.0858,
      "b": true
     }
    ],
    "dynedge": [
     {
      "v": 0.1712,
      "b": true
     },
     {
      "v": 0.2568,
      "b": true
     },
     {
      "v": 0.0775,
      "b": false
     },
     {
      "v": 0.1468,
      "b": false
     },
     {
      "v": 0.0369,
      "b": false
     },
     {
      "v": 0.0908,
      "b": false
     }
    ],
    "grit": [
     {
      "v": 0.3962,
      "b": false
     },
     {
      "v": 0.4659,
      "b": false
     },
     {
      "v": 0.1034,
      "b": false
     },
     {
      "v": 0.1512,
      "b": false
     },
     {
      "v": 0.0469,
      "b": false
     },
     {
      "v": 0.1123,
      "b": false
     }
    ]
   },
   "triangle": {
    "particlenet": [
     {
      "v": 0.3858,
      "b": false
     },
     {
      "v": 0.4044,
      "b": false
     },
     {
      "v": 0.1987,
      "b": false
     },
     {
      "v": 0.2984,
      "b": false
     },
     {
      "v": 0.0705,
      "b": false
     },
     {
      "v": 0.1796,
      "b": false
     }
    ],
    "dynedge": [
     {
      "v": 0.1846,
      "b": true
     },
     {
      "v": 0.2401,
      "b": true
     },
     {
      "v": 0.141,
      "b": true
     },
     {
      "v": 0.2411,
      "b": true
     },
     {
      "v": 0.0629,
      "b": false
     },
     {
      "v": 0.1554,
      "b": false
     }
    ],
    "grit": [
     {
      "v": 0.4061,
      "b": false
     },
     {
      "v": 0.4158,
      "b": false
     },
     {
      "v": 0.1769,
      "b": false
     },
     {
      "v": 0.2818,
      "b": false
     },
     {
      "v": 0.055,
      "b": true
     },
     {
      "v": 0.1524,
      "b": true
     }
    ]
   }
  },
  "classification": {
   "flower_xl": {
    "particlenet": [
     {
      "v": 0.8954,
      "b": false,
      "e": 0.0004
     },
     {
      "v": 0.6797,
      "b": true,
      "e": 0.0013
     },
     {
      "v": 0.7969,
      "b": false,
      "e": 0.0009
     },
     {
      "v": 0.9816,
      "b": false,
      "e": 0.0003
     }
    ],
    "dynedge": [
     {
      "v": 0.889,
      "b": false,
      "e": 0.0004
     },
     {
      "v": 0.678,
      "b": true,
      "e": 0.0014
     },
     {
      "v": 0.797,
      "b": false,
      "e": 0.0012
     },
     {
      "v": 0.9796,
      "b": false,
      "e": 0.0002
     }
    ],
    "grit": [
     {
      "v": 0.9005,
      "b": true,
      "e": 0.0003
     },
     {
      "v": 0.6702,
      "b": false,
      "e": 0.0013
     },
     {
      "v": 0.8108,
      "b": true,
      "e": 0.0011
     },
     {
      "v": 0.984,
      "b": true,
      "e": 0.0002
     }
    ]
   },
   "flower_l": {
    "particlenet": [
     {
      "v": 0.9308,
      "b": false,
      "e": 0.0002
     },
     {
      "v": 0.5371,
      "b": false,
      "e": 0.0012
     },
     {
      "v": 0.8012,
      "b": false,
      "e": 0.0007
     },
     {
      "v": 0.986,
      "b": false,
      "e": 0.0001
     }
    ],
    "dynedge": [
     {
      "v": 0.9318,
      "b": false,
      "e": 0.0002
     },
     {
      "v": 0.5327,
      "b": false,
      "e": 0.001
     },
     {
      "v": 0.8136,
      "b": false,
      "e": 0.0007
     },
     {
      "v": 0.9859,
      "b": false,
      "e": 0.0001
     }
    ],
    "grit": [
     {
      "v": 0.9462,
      "b": true,
      "e": 0.0001
     },
     {
      "v": 0.5462,
      "b": true,
      "e": 0.0013
     },
     {
      "v": 0.8512,
      "b": true,
      "e": 0.0006
     },
     {
      "v": 0.9909,
      "b": true,
      "e": 0.0001
     }
    ]
   },
   "hexagon": {
    "particlenet": [
     {
      "v": 0.9177,
      "b": false,
      "e": 0.0002
     },
     {
      "v": 0.656,
      "b": false,
      "e": 0.001
     },
     {
      "v": 0.7898,
      "b": false,
      "e": 0.0005
     },
     {
      "v": 0.9786,
      "b": false,
      "e": 0.0001
     }
    ],
    "dynedge": [
     {
      "v": 0.934,
      "b": true,
      "e": 0.0001
     },
     {
      "v": 0.6719,
      "b": true,
      "e": 0.001
     },
     {
      "v": 0.8273,
      "b": true,
      "e": 0.0005
     },
     {
      "v": 0.9853,
      "b": true,
      "e": 0.0001
     }
    ],
    "grit": [
     {
      "v": 0.9219,
      "b": false,
      "e": 0.0002
     },
     {
      "v": 0.6444,
      "b": false,
      "e": 0.001
     },
     {
      "v": 0.798,
      "b": false,
      "e": 0.0006
     },
     {
      "v": 0.9801,
      "b": false,
      "e": 0.0001
     }
    ]
   },
   "hexagon_ice_le": {
    "particlenet": [
     {
      "v": 0.7739,
      "b": false,
      "e": 0.0003
     },
     {
      "v": 0.5473,
      "b": false,
      "e": 0.0009
     },
     {
      "v": 0.8241,
      "b": false,
      "e": 0.0003
     },
     null
    ],
    "dynedge": [
     {
      "v": 0.7714,
      "b": false,
      "e": 0.0003
     },
     {
      "v": 0.5465,
      "b": false,
      "e": 0.0006
     },
     {
      "v": 0.8215,
      "b": false,
      "e": 0.0003
     },
     null
    ],
    "grit": [
     {
      "v": 0.7793,
      "b": true,
      "e": 0.0003
     },
     {
      "v": 0.5505,
      "b": true,
      "e": 0.0007
     },
     {
      "v": 0.8295,
      "b": true,
      "e": 0.0003
     },
     null
    ]
   },
   "flower_s": {
    "particlenet": [
     {
      "v": 0.9398,
      "b": true,
      "e": 0.0001
     },
     {
      "v": 0.9198,
      "b": true,
      "e": 0.0002
     },
     {
      "v": 0.9669,
      "b": true,
      "e": 0.0002
     },
     null
    ],
    "dynedge": [
     {
      "v": 0.9339,
      "b": false,
      "e": 0.0001
     },
     {
      "v": 0.9168,
      "b": false,
      "e": 0.0002
     },
     {
      "v": 0.9619,
      "b": false,
      "e": 0.0002
     },
     null
    ]
   },
   "cluster": {
    "particlenet": [
     {
      "v": 0.9242,
      "b": true,
      "e": 0.0002
     },
     {
      "v": 0.7536,
      "b": true,
      "e": 0.0007
     },
     {
      "v": 0.8849,
      "b": true,
      "e": 0.0005
     },
     {
      "v": 0.9908,
      "b": true,
      "e": 0.0001
     }
    ],
    "dynedge": [
     {
      "v": 0.9223,
      "b": false,
      "e": 0.0001
     },
     {
      "v": 0.754,
      "b": true,
      "e": 0.0005
     },
     {
      "v": 0.8852,
      "b": true,
      "e": 0.0004
     },
     {
      "v": 0.9891,
      "b": false,
      "e": 0.0001
     }
    ],
    "grit": [
     {
      "v": 0.9014,
      "b": false,
      "e": 0.0002
     },
     {
      "v": 0.7257,
      "b": false,
      "e": 0.0005
     },
     {
      "v": 0.836,
      "b": false,
      "e": 0.0005
     },
     {
      "v": 0.9856,
      "b": false,
      "e": 0.0001
     }
    ]
   },
   "triangle": {
    "particlenet": [
     {
      "v": 0.9205,
      "b": false,
      "e": 0.0002
     },
     {
      "v": 0.5561,
      "b": true,
      "e": 0.0016
     },
     {
      "v": 0.7748,
      "b": false,
      "e": 0.0005
     },
     {
      "v": 0.9667,
      "b": false,
      "e": 0.0002
     }
    ],
    "dynedge": [
     {
      "v": 0.9207,
      "b": false,
      "e": 0.0001
     },
     {
      "v": 0.5322,
      "b": false,
      "e": 0.0013
     },
     {
      "v": 0.7681,
      "b": false,
      "e": 0.0006
     },
     {
      "v": 0.97,
      "b": false,
      "e": 0.0001
     }
    ],
    "grit": [
     {
      "v": 0.9292,
      "b": true,
      "e": 0.0001
     },
     {
      "v": 0.5479,
      "b": false,
      "e": 0.0011
     },
     {
      "v": 0.7902,
      "b": true,
      "e": 0.0005
     },
     {
      "v": 0.9744,
      "b": true,
      "e": 0.0001
     }
    ]
   }
  }
 }
};
