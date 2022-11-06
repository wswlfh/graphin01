 
      /** 动态请求需要的配套资产 **/
      export const GI_ASSETS_PACKAGE = [{
  "url": "https://gw.alipayobjects.com/os/lib/alipay/gi-assets-gs-standalone/1.1.0/dist/index.min.js",
  "global": "GI_ASSETS_GS_STANDALONE",
  "name": "@alipay/gi-assets-gs-standalone",
  "version": "1.1.0"
}, {
  "url": "https://gw.alipayobjects.com/os/lib/alipay/gi-assets-advance/2.19.0/dist/index.min.js",
  "global": "GI_ASSETS_ADVANCE",
  "name": "@alipay/gi-assets-advance",
  "version": "2.19.0"
}, {
  "url": "https://gw.alipayobjects.com/os/lib/alipay/gi-assets-basic/2.24.0/dist/index.min.js",
  "global": "GI_ASSETS_BASIC",
  "name": "@alipay/gi-assets-basic",
  "version": "2.24.0"
}, {
  "url": "https://gw.alipayobjects.com/os/lib/alipay/gi-assets-scene/2.7.1/dist/index.min.js",
  "global": "GI_ASSETS_SCENE",
  "name": "@alipay/gi-assets-scene",
  "version": "2.7.1"
}];

      /** GraphInsight 站点自动生成的配置 **/
      export const GI_PROJECT_CONFIG = {
  "nodes": [{
    "id": "SimpleNode",
    "props": {
      "size": 30,
      "color": "rgba(207,76,76,1)",
      "label": [],
      "advanced": {
        "icon": {
          "type": "font",
          "value": "",
          "fill": "#fff"
        },
        "keyshape": {
          "fillOpacity": 0.8
        },
        "label": {
          "visible": true,
          "fill": "#000",
          "fontSize": 12,
          "position": "bottom"
        },
        "badge": {
          "visible": false
        }
      }
    },
    "groupName": "默认样式",
    "expressions": [],
    "logic": true
  }],
  "edges": [{
    "id": "SimpleEdge",
    "props": {
      "size": 1,
      "color": "rgba(39,36,36,1)",
      "label": [],
      "advanced": {
        "keyshape": {
          "customPoly": false,
          "lineDash": [],
          "opacity": 1
        },
        "label": {
          "visible": true,
          "fontSize": 12,
          "offset": [0, 0],
          "fill": "#ddd",
          "backgroundEnable": true,
          "backgroundFill": "#fff",
          "backgroundStroke": "#fff"
        },
        "animate": {
          "visible": false
        }
      }
    },
    "groupName": "默认样式",
    "expressions": [],
    "logic": true
  }],
  "layout": {
    "id": "GraphinForce",
    "props": {
      "type": "graphin-force",
      "animation": true,
      "preset": {
        "type": "concentric"
      },
      "stiffness": 200,
      "repulsion": 1000,
      "damping": 0.9,
      "defSpringLenCfg": {
        "minLimitDegree": 5,
        "maxLimitLength": 500,
        "defaultSpring": 100
      },
      "centripetalOptions": {
        "leaf": 2,
        "single": 2,
        "others": 1
      }
    }
  },
  "components": [{
    "id": "ZoomIn",
    "props": {
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "放大",
        "isShowIcon": true,
        "icon": "icon-zoomin",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "60px",
        "isVertical": true
      }
    }
  }, {
    "id": "ZoomOut",
    "props": {
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "缩小",
        "isShowIcon": true,
        "icon": "icon-zoomout",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "60px",
        "isVertical": true
      }
    }
  }, {
    "id": "FitView",
    "props": {
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "自适应",
        "isShowIcon": true,
        "icon": "icon-fit-view",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "60px",
        "isVertical": true
      }
    }
  }, {
    "id": "FitCenter",
    "props": {
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "视图居中",
        "isShowIcon": true,
        "icon": "icon-fit-center",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "60px",
        "isVertical": true
      }
    }
  }, {
    "id": "LassoSelect",
    "props": {
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "自由圈选",
        "isShowIcon": true,
        "icon": "icon-lasso",
        "isShowTooltip": true,
        "tooltip": "按住Shift，点击画布即可自由圈选",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "60px",
        "isVertical": true
      }
    }
  }, {
    "id": "PropertiesPanel",
    "props": {
      "serviceId": "GI/PropertiesPanel",
      "title": "属性面板",
      "placement": "RT",
      "width": "356px",
      "height": "calc(100% - 0px)",
      "offset": [10, 10],
      "animate": false,
      "defaultiStatistic": false
    }
  }, {
    "id": "ActivateRelations",
    "props": {
      "enableNodeHover": true,
      "enableEdgeHover": true,
      "enable": true,
      "trigger": "click",
      "upstreamDegree": 1,
      "downstreamDegree": 1
    }
  }, {
    "id": "CanvasSetting",
    "props": {
      "styleCanvas": {
        "background": "#fff",
        "backgroundImage": "https://gw.alipayobjects.com/mdn/rms_0d75e8/afts/img/A*k9t4QamMuQ4AAAAAAAAAAAAAARQnAQ"
      },
      "dragCanvas": {
        "disabled": false,
        "direction": "both",
        "enableOptimize": true
      },
      "zoomCanvas": {
        "disabled": false,
        "enableOptimize": true
      },
      "clearStatus": true
    }
  }, {
    "id": "NodeLegend",
    "props": {
      "sortKey": "type",
      "textColor": "#ddd",
      "placement": "LB",
      "offset": [100, 20]
    }
  }, {
    "id": "Placeholder",
    "name": "画布占位符",
    "props": {
      "img": "https://gw.alipayobjects.com/zos/bmw-prod/db278704-6158-432e-99d2-cc5db457585d.svg",
      "text": "当前画布为空，请先试试「数据/图数据源/导入/示例数据」",
      "width": 380
    }
  }, {
    "id": "FilterPanel",
    "name": "筛选面板",
    "props": {
      "histogramColor": "#3056E3",
      "isFilterIsolatedNodes": true,
      "highlightMode": true,
      "GI_CONTAINER_INDEX": 2,
      "GIAC_CONTENT": {
        "visible": false,
        "disabled": false,
        "isShowTitle": true,
        "title": "筛选面板",
        "isShowIcon": true,
        "icon": "icon-filter",
        "isShowTooltip": true,
        "tooltip": "通过属性筛选画布信息，可自定义",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "top",
        "hasDivider": false,
        "height": "60px",
        "isVertical": true,
        "containerType": "div",
        "containerAnimate": false,
        "containerPlacement": "RT",
        "offset": [0, 0],
        "containerWidth": "400px",
        "containerHeight": "calc(100% - 100px)",
        "contaienrMask": false
      },
      "filterKeys": [],
      "filterLogic": "and"
    }
  }, {
    "id": "LargeGraph",
    "name": "3D大图",
    "props": {
      "visible": false,
      "minSize": "50%",
      "maxSize": "100%",
      "placement": "RB",
      "offset": [0, 0],
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "3D大图",
        "isShowIcon": true,
        "icon": "icon-3d",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "60px",
        "isVertical": true
      },
      "backgroundColor": "#fff",
      "highlightColor": "red"
    }
  }, {
    "id": "MapMode",
    "name": "地图模式",
    "props": {
      "visible": false,
      "type": "amap",
      "theme": "light",
      "minSize": "50%",
      "maxSize": "100%",
      "placement": "RB",
      "offset": [0, 0],
      "longitudeKey": "longitude",
      "latitudeKey": "latitude",
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "地图模式",
        "isShowIcon": true,
        "icon": "icon-global",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "60px",
        "isVertical": true
      }
    }
  }, {
    "id": "SnapshotGallery",
    "name": "快照画廊",
    "props": {
      "background": "#fff",
      "direction": "horizontal",
      "placement": "LT",
      "offset": [20, 20],
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "快照画廊",
        "isShowIcon": true,
        "icon": "icon-camera",
        "isShowTooltip": true,
        "tooltip": "快照画廊(快捷键ctrl+x)",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "60px",
        "isVertical": true
      }
    }
  }, {
    "id": "ContextMenu",
    "name": "右键菜单",
    "props": {
      "GI_CONTAINER": ["NeighborsQuery", "ToggleClusterWithMenu", "PinNodeWithMenu"]
    }
  }, {
    "id": "ToggleClusterWithMenu",
    "name": "展开/收起",
    "props": {
      "isReLayout": false,
      "degree": 1
    }
  }, {
    "id": "NeighborsQuery",
    "name": "邻居查询",
    "props": {
      "serviceId": "GI/NeighborsQuery",
      "degree": "1",
      "isFocus": true
    }
  }, {
    "id": "Copyright",
    "name": "版权",
    "props": {
      "imageUrl": "https://gw.alipayobjects.com/zos/bmw-prod/c2d4b2f5-2a34-4ae5-86c4-df97f7136105.svg",
      "width": 200,
      "height": 30,
      "placement": "RB",
      "offset": [10, 10]
    }
  }, {
    "id": "Loading",
    "name": "加载动画",
    "props": {}
  }, {
    "id": "PinNodeWithMenu",
    "name": "固定节点(MENU)",
    "props": {
      "color": "#fff",
      "fill": "#262626"
    }
  }, {
    "id": "ForceSimulation",
    "name": "力导布局控制器",
    "props": {
      "autoPin": true,
      "dragNodeMass": 10000000,
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "力导布局控制器",
        "isShowIcon": true,
        "icon": "icon-layout-force",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "60px",
        "isVertical": true
      }
    }
  }, {
    "id": "Initializer",
    "name": "初始化器",
    "props": {
      "serviceId": "GI/GI_SERVICE_INTIAL_GRAPH",
      "schemaServiceId": "GI/GI_SERVICE_SCHEMA",
      "GI_INITIALIZER": true,
      "aggregate": true
    }
  }, {
    "id": "LayoutSwitch",
    "name": "布局切换",
    "props": {
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "布局切换",
        "isShowIcon": true,
        "icon": "icon-layout",
        "isShowTooltip": false,
        "tooltip": "一键切换画布布局",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "60px",
        "isVertical": true
      }
    }
  }, {
    "id": "GrailLayout",
    "name": "圣杯布局",
    "props": {
      "GI_CONTAINER_LEFT": [],
      "leftDisplay": false,
      "leftWidth": "400px",
      "GI_CONTAINER_RIGHT": ["FilterPanel", "Overview"],
      "rightDisplay": true,
      "rightWidth": "350px",
      "GI_CONTAINER_BOTTOM": [],
      "bottomDisplay": false,
      "bottomHeight": "400px",
      "GI_CONTAINER_TOP": [],
      "topDisplay": false,
      "topHeight": "200px"
    }
  }, {
    "id": "Toolbar",
    "name": "工具栏",
    "props": {
      "GI_CONTAINER": ["ZoomIn", "ZoomOut", "FitView", "FitCenter", "LargeGraph", "MapMode", "ForceSimulation",
        "LayoutSwitch", "Export"
      ],
      "direction": "vertical",
      "placement": "LT",
      "offset": [24, 64]
    }
  }, {
    "id": "Export",
    "name": "导出",
    "props": {
      "GI_CONTAINER_INDEX": 2,
      "GIAC": {
        "visible": false,
        "disabled": false,
        "isShowTitle": false,
        "title": "导出",
        "isShowIcon": true,
        "icon": "icon-export",
        "isShowTooltip": true,
        "tooltip": "导出CSV,PNG,JSON数据",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "60px",
        "isVertical": true
      }
    }
  }, {
    "id": "Overview",
    "name": "大图概览",
    "props": {
      "limit": 600,
      "filterLogic": "and",
      "GI_CONTAINER_INDEX": 2,
      "GIAC_CONTENT": {
        "visible": false,
        "disabled": false,
        "isShowTitle": true,
        "title": "大图概览",
        "isShowIcon": true,
        "icon": "icon-dashboard",
        "isShowTooltip": true,
        "tooltip": "",
        "tooltipColor": "#3056e3",
        "tooltipPlacement": "right",
        "hasDivider": false,
        "height": "60px",
        "isVertical": true,
        "containerType": "div",
        "containerAnimate": false,
        "containerPlacement": "RT",
        "offset": [0, 0],
        "containerWidth": "400px",
        "containerHeight": "calc(100% - 100px)",
        "contaienrMask": false
      }
    }
  }]
};
      
      /** GraphInsight 站点选择服务引擎的上下文配置信息 **/
      export const SERVER_ENGINE_CONTEXT = {
  "GI_SITE_PROJECT_ID": "801f346e-175a-4121-b23b-47acabd0273a",
  "engineId": "GI",
  "data": {
    "nodes": [{
      "id": "0",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "0",
        "label": "n0",
        "class": "c0",
        "x": 1000,
        "y": -100
      }
    }, {
      "id": "1",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "1",
        "label": "n1",
        "class": "c0",
        "x": 300,
        "y": -10
      }
    }, {
      "id": "2",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "2",
        "label": "n2",
        "class": "c0",
        "x": 10,
        "y": 10
      }
    }, {
      "id": "3",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "3",
        "label": "n3",
        "class": "c0",
        "x": 320,
        "y": -100
      }
    }, {
      "id": "4",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "4",
        "label": "n4",
        "class": "c0",
        "x": 100,
        "y": 900
      }
    }, {
      "id": "5",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "5",
        "label": "n5",
        "class": "c0",
        "x": 120,
        "y": 213
      }
    }, {
      "id": "6",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "6",
        "label": "n6",
        "class": "c1",
        "x": 543,
        "y": 12
      }
    }, {
      "id": "7",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "7",
        "label": "n7",
        "class": "c1",
        "x": 543,
        "y": -100
      }
    }, {
      "id": "8",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "8",
        "label": "n8",
        "class": "c1",
        "x": 1,
        "y": 0
      }
    }, {
      "id": "9",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "9",
        "label": "n9",
        "class": "c1",
        "x": 0,
        "y": -222
      }
    }, {
      "id": "10",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "10",
        "label": "n10",
        "class": "c1",
        "x": 435,
        "y": 69
      }
    }, {
      "id": "11",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "11",
        "label": "n11",
        "class": "c1",
        "x": 23,
        "y": 10
      }
    }, {
      "id": "12",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "12",
        "label": "n12",
        "class": "c1",
        "x": -129,
        "y": 39
      }
    }, {
      "id": "13",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "13",
        "label": "n13",
        "class": "c2",
        "x": 234,
        "y": 843
      }
    }, {
      "id": "14",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "14",
        "label": "n14",
        "class": "c2",
        "x": -301,
        "y": 129
      }
    }, {
      "id": "15",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "15",
        "label": "n15",
        "class": "c2",
        "x": -20,
        "y": -76
      }
    }, {
      "id": "16",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "16",
        "label": "n16",
        "class": "c2",
        "x": 1220,
        "y": -34
      }
    }, {
      "id": "17",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "17",
        "label": "n17",
        "class": "c2",
        "x": -10,
        "y": 954
      }
    }, {
      "id": "18",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "18",
        "label": "n18",
        "class": "c2",
        "x": 492,
        "y": 123
      }
    }, {
      "id": "19",
      "nodeTypeKeyFromProperties": "nodeType",
      "data": {
        "id": "19",
        "label": "n19",
        "class": "c2",
        "x": 123,
        "y": -241
      }
    }],
    "edges": [{
      "source": "0",
      "target": "1",
      "edgeTypeKeyFromProperties": "edgeType",
      "data": {
        "source": "0",
        "target": "1",
        "label": "e0-1",
        "weight": 1
      }
    }, {
      "source": "0",
      "target": "2",
      "edgeTypeKeyFromProperties": "edgeType",
      "data": {
        "source": "0",
        "target": "2",
        "label": "e0-2",
        "weight": 2
      }
    }, {
      "source": "0",
      "target": "3",
      "edgeTypeKeyFromProperties": "edgeType",
      "data": {
        "source": "0",
        "target": "3",
        "label": "e0-3",
        "weight": 3
      }
    }, {
      "source": "0",
      "target": "4",
      "edgeTypeKeyFromProperties": "edgeType",
      "data": {
        "source": "0",
        "target": "4",
        "label": "e0-4",
        "weight": 1.4
      }
    }, {
      "source": "0",
      "target": "5",
      "edgeTypeKeyFromProperties": "edgeType",
      "data": {
        "source": "0",
        "target": "5",
        "label": "e0-5",
        "weight": 2
      }
    }, {
      "source": "0",
      "target": "16",
      "edgeTypeKeyFromProperties": "edgeType",
      "data": {
        "source": "0",
        "target": "16",
        "label": "e0-16",
        "weight": 0.8
      }
    }, {
      "source": "2",
      "target": "3",
      "edgeTypeKeyFromProperties": "edgeType",
      "data": {
        "source": "2",
        "target": "3",
        "label": "e2-3",
        "weight": 1
      }
    }, {
      "source": "4",
      "target": "5",
      "edgeTypeKeyFromProperties": "edgeType",
      "data": {
        "source": "4",
        "target": "5",
        "label": "e4-5",
        "weight": 1.4
      }
    }, {
      "source": "16",
      "target": "18",
      "edgeTypeKeyFromProperties": "edgeType",
      "data": {
        "source": "16",
        "target": "18",
        "label": "e16-18",
        "weight": 3
      }
    }, {
      "source": "17",
      "target": "18",
      "edgeTypeKeyFromProperties": "edgeType",
      "data": {
        "source": "17",
        "target": "18",
        "label": "e17-18",
        "weight": 2.6
      }
    }, {
      "source": "18",
      "target": "19",
      "edgeTypeKeyFromProperties": "edgeType",
      "data": {
        "source": "18",
        "target": "19",
        "label": "e18-19",
        "weight": 1.6
      }
    }],
    "combos": []
  },
  "schemaData": {
    "nodes": [{
      "nodeType": "UNKNOW",
      "nodeTypeKeyFromProperties": "nodeType",
      "properties": {
        "id": "string",
        "label": "string",
        "class": "string",
        "x": "number",
        "y": "number"
      }
    }],
    "edges": [{
      "edgeType": "UNKNOW",
      "edgeTypeKeyFromProperties": "edgeType",
      "properties": {
        "source": "string",
        "target": "string",
        "label": "string",
        "weight": "number"
      }
    }]
  }
};
    