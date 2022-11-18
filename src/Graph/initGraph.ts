import { Graph, Shape } from "@antv/x6"

export const initGraph = ()=> {
    const graph = new Graph({
        container: document.getElementById('container')!,
        grid: true,
        history:true,
        onToolItemCreated({ tool }) {
          const handle = tool as any
          const options = handle.options
          if (options && options.index % 2 === 1) {
            tool.setAttrs({ fill: 'red' })
          }
        },
        mousewheel: {
          enabled: true,
          zoomAtMousePosition: true,
          modifiers: "ctrl",
          minScale: 0.5,
          maxScale: 3
        },
        connecting: {
          router: {
            name: "manhattan",
            args: {
              padding: 1
            }
          },
          connector: {
            name: "rounded",
            args: {
              radius: 8
            }
          },
          anchor: "center",
          connectionPoint: "anchor",
          allowBlank: false,
          snap: {
            radius: 20
          },
          createEdge() {
            return new Shape.Edge({
              attrs: {
                line: {
                  stroke: "#A2B1C3",
                  strokeWidth: 2,
                  targetMarker: {
                    name: "block",
                    width: 12,
                    height: 8
                  }
                }
              },
              tools: {
                name: 'segments',
                args: {
                  snapRadius: 20,
                  attrs: {
                    fill: '#444',
                  },
                },
              },
              zIndex: 0
            });
          },  
        // // 是否触发交互事件
        // validateMagnet({ magnet }) {
        //   return magnet.getAttribute('port-group') !== 'top'
        //   // return true
        // },               
        // // 显示可用的链接桩
        // validateConnection({
        //   sourceView,
        //   targetView,
        //   sourceMagnet,
        //   targetMagnet,
        // }) {
        //   // 不允许连接到自己
        //   if (sourceView === targetView) {
        //     return false
        //   }

        //   // 只能从输出链接桩创建连接
        //   if (
        //     !sourceMagnet ||
        //     sourceMagnet.getAttribute('port-group') === 'top'
        //   ) {
        //     return false
        //   }

        //   // 只能连接到输入链接桩
        //   if (
        //     !targetMagnet ||
        //     targetMagnet.getAttribute('port-group') !== 'top'
        //   ) {
        //     return false
        //   }
        //   return !!targetMagnet
        // },
        },
        highlighting: {
          magnetAdsorbed: {
            name: "stroke",
            args: {
              attrs: {
                fill: "#5F95FF",
                stroke: "#5F95FF"
              }
            }
          }
        },
        resizing: true,
        rotating: true,
        selecting: {
          enabled: true,
          rubberband: true,
          // rubberEdge: true,
          modifiers: 'shift',
          showNodeSelectionBox: true,
          // showEdgeSelectionBox: true,
        },
        panning: {
          enabled: true,
        },
        snapline: true,
        keyboard: true,
        clipboard: true
    });
    graph.drawBackground({
      color:'#fef8ef'
    })
    initEvent(graph);
    initKeyboard(graph);
    return graph;
}

const initEvent = (graph:Graph)=> {
  const container = document.getElementById('container')!
  const showPorts = (show: boolean) => {
    const ports = container.querySelectorAll(
      ".x6-port-body"
    ) as NodeListOf<SVGElement>;
    for (let i = 0, len = ports.length; i < len; i = i + 1) {
      ports[i].style.visibility = show ? "visible" : "hidden";
    }
  };

  graph.on("node:mouseenter", () => {
    showPorts(true);
  });

  graph.on("node:mouseleave", () => {
    showPorts(false);
  });

  // 双击进入编辑模式
  graph.on('node:dblclick', ({ node, e }) => {
    node.addTools({
      name: 'node-editor',
      args: {
        event: e,
      },
    })
  })
  // graph.on('edge:dblclick', ({ cell, e }) => {
  //   cell.addTools({
  //     name: 'edge-editor',
  //     args: {
  //       event: e,
  //     },
  //   })
  // })
}

const initKeyboard = (graph:Graph) => {
  graph.bindKey(['meta+c', 'ctrl+c'], () => {
    const cells = graph.getSelectedCells()
    if (cells.length) {
        graph.copy(cells)
    }
    return false
  })

  graph.bindKey(['meta+x', 'ctrl+x'], () => {
    const cells = graph.getSelectedCells()
    if (cells.length) {
        graph.cut(cells)
    }
    return false
  })

  graph.bindKey(['meta+v', 'ctrl+v'], () => {
    if (!graph.isClipboardEmpty()) {
      const cells = graph.paste({ offset: 32 })
      graph.cleanSelection()
      graph.select(cells)
    }
    return false
  })

  //undo redo
  graph.bindKey(['meta+z', 'ctrl+z'], () => {
    if (graph.history.canUndo()) {
        graph.history.undo()
    }
    return false
  })

  graph.bindKey(['meta+shift+z', 'ctrl+shift+z'], () => {
    if (graph.history.canRedo()) {
        graph.history.redo()
    }
    return false
  })

  // select all
  graph.bindKey(['meta+a', 'ctrl+a'], () => {
    const nodes = graph.getNodes()
    if (nodes) {
        graph.select(nodes)
    }
  })

  //delete
  graph.bindKey('backspace', (e) => {
    const cells = graph.getSelectedCells()
    if(!(cells[0].hasTool('node-editor') || cells[0].hasTool('edge-editor'))){
      // 没有在编辑状态
      if (cells.length) {
          graph.removeCells(cells)
      }      
    }
  })

  // zoom
  graph.bindKey(['ctrl+1', 'meta+1'], () => {
    const zoom = graph.zoom()
    if (zoom < 1.5) {
        graph.zoom(0.1)
    }
  })

  graph.bindKey(['ctrl+2', 'meta+2'], () => {
    const zoom = graph.zoom()
    if (zoom > 0.5) {
        graph.zoom(-0.1)
    }
  })

  // 单击选中边，拖拽时可以编辑边

  graph.on('edge:mouseenter', ({ cell }) => {
      cell.addTools([
        {
          name: 'source-arrowhead',
        },
        {
          name: 'target-arrowhead',
          args: {
            attrs: {
              fill: '#3399ff',
            },
          },
        },
        // { name: 'vertices' },
        // {
        //   name: 'button-remove',
        //   args: { distance: 20  },
        // },
        // { name: 'segments'},
      ])
      
  })
  
  // graph.on('edge:mouseleave', ({ cell }) => {
  //     cell.removeTools()
  // })

  // graph.on('edge:contextmenu', ({ cell }) => {
  //   console.log('右键边')
  //   cell.addTools([
  //     { name: 'vertices' },
  //     { name: 'segments'},
  //   ])
  // })

  // graph.on('edge:added', ({ edge }) => {
  //   if(!edge.getVertices().length){
  //     // edge.setVertices([edge.getSourcePoint(),edge.getTargetPoint()])
  //     edge.setVertices(edge.getSourcePoint())
  //   }
  // })

  graph.on('edge:click', ({ cell }) => {
    graph.select(cell);
    // if(!cell.getVertices().length){
    //   cell.setVertices([cell.getSourcePoint(),cell.getTargetPoint()])
    // }
    cell.addTools([
      // { name: 'vertices' },
      { name: 'vertices',
        args: [
          {x:40,y:40}
        ]
      },
      {name:'boundary'},
      { name: 'segments'},
    ])
  })
  graph.on('edge:unselected', ({ cell }) => {
    cell.removeTools()
  })
}