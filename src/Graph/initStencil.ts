import { Addon, Graph } from "@antv/x6"
import './shape'

export const initStencil = (graph:Graph) => {
    const stencil = new Addon.Stencil({
        title: '流程图',
        target: graph,
        stencilGraphWidth: 180,
        stencilGraphHeight: document.body.offsetHeight - 105,
        collapsable: true,
        groups: [
            {
                title: 'TRIGGERS',
                name: 'group1',
                graphHeight: 220,
                layoutOptions: {
                rowHeight: 50,
                },
            },
            {
                title: 'LOGIC',
                name: 'group2',
                graphHeight: 70,
                layoutOptions: {
                rowHeight: 50,
                },
            },
            {
                title: 'DATA',
                name: 'group3',
                graphHeight: 320,
                layoutOptions: {
                rowHeight: 50,
                },
            },
            {
                title: 'OUTPUTS',
                name: 'group4',
                graphHeight: 170,
                layoutOptions: {
                rowHeight: 50,
                },
            },
            {
                title: '基础流程图',
                name: 'group5',
                graphHeight: 250,
                layoutOptions: {
                    rowHeight: 70,
                    columns: 2,
                    columnWidth: 80,
                },
            },
            {
                title: '系统设计图',
                name: 'group6',
                graphHeight: 250,
                layoutOptions: {
                    rowHeight: 70,
                    columns: 2,
                    columnWidth: 80,
                },
            },
        ],
        layoutOptions: {
            columns: 1,
            // columnWidth: 95,
            columnWidth: 160,
            rowHeight: 55,
        },
        // 设置拖入画布时图片的大小
        // getDropNode(node) {
        //     const size = node.size()
        //     return node.clone().size(size.width * 0.6, size.height * 1)
        //     // return node.clone().size(size.width * 3, size.height * 3)
        // }
    })

    // 开始
    const r1 = graph.createNode({
        shape: 'custom-start',
        label: '开始',
        attrs: {
            body: {
            rx: 20,
            ry: 26,
            },
        },
        category:'choose',
        config:'hhh'
    })
    // timer
    const r1_1 = graph.createNode({
        shape: 'custom-start',
        label: '⏱️ Timer',
        attrs: {
            body: {
                rx: 6,
                ry: 6,
                // fill: '#283a5b',
                // stroke: '#283a5b',
            },
            // label: {
            //     // fill: '#e9a2b9',
            //     refX: 10, // x 轴偏移，类似 css 中的 margin-left
            //     textAnchor: 'left', // 左对齐
            // }
        },
        config: {
            seconds: 60
        },
        meta: {
            category:'timer',
            timeAt: "",
            timerTypeSelect: "seconds",
            weekdays: [
            ],
        },
    })
    // virtual-button
    const r1_2 = graph.createNode({
        shape: 'custom-start',
        label: 'Virtual',
        attrs: {
            body: {
                rx: 6,
                ry: 6,
            },
        },
        meta: {
            payload: "",
        },
    })
    // trigger_mqtt
    const r1_3 = graph.createNode({
        shape: 'custom-start',
        label: 'MQTT',
        attrs: {
            body: {
                rx: 6,
                ry: 6,
            },
        },
        meta: {
            category:'trigger_mqtt',
            payload: "",
        },
    })
    // serial
    const r1_4 = graph.createNode({
        shape: 'custom-start',
        label: 'Serial',
        attrs: {
            body: {
                rx: 6,
                ry: 6,
            },
        },
        meta: {
            category:'serial',
            payload: "",
        },
    })

    // function
    const r2_1 = graph.createNode({
        shape: 'custom-logic',
        label: 'Function',
        attrs: {
            body: {
                rx: 6,
                ry: 6,
            },
        },
        meta: {
            category:'function',
            payload:''
        }
    })

    // data
    // runExec
    const r3_1 = graph.createNode({
        shape: 'custom-data',
        label: 'Run Executable',
        meta: {
            category:'runExec',
            payload:''
        }
    })
    // tensorFlow
    const r3_2 = graph.createNode({
        shape: 'custom-data',
        label: 'TensorFlow: Predict',
        meta: {
            category:'tensorFlow',
            payload:''
        }
    })
    // serial_write
    const r3_3 = graph.createNode({
        shape: 'custom-data',
        label: 'Serial: Write',
        meta: {
            category:'serial_write',
        }
    })
    // aws_lambda
    const r3_4 = graph.createNode({
        shape: 'custom-data',
        label: 'AWS Lambda',
        meta: {
            category:'aws_lambda',
        }
    })
    // modbus_read
    const r3_5 = graph.createNode({
        shape: 'custom-data',
        label: 'Modbus: Read',
        meta: {
            category:'modbus_read',
        }
    })

    // output_mqtt
    const r4_1 = graph.createNode({
        shape: 'custom-end',
        label: 'MQTT',
        meta: {
            category:'output_mqtt'
        }
    })
    const r4_2 = graph.createNode({
        shape: 'custom-end',
        label: 'HTTP',
        meta: {
            category:'http'
        }
    })
    const r4_3 = graph.createNode({
        shape: 'custom-end',
        label: 'Debug',
        meta: {
            category:'debug'
        }
    })




    // 过程
    const r2 = graph.createNode({
        shape: 'custom-rect',
        label: '过程',
    })
    // 可选过程
    const r3 = graph.createNode({
        shape: 'custom-choose',
        attrs: {
            body: {
            rx: 6,
            ry: 6,
            },
        },
        label: '可选过程',
    })
    // 决策
    const r4 = graph.createNode({
        shape: 'custom-polygon',
        attrs: {
            body: {
            refPoints: '0,10 10,0 20,10 10,20',
            },
        },
        label: '决策',
    })
    // 数据
    const r5 = graph.createNode({
        shape: 'custom-polygon',
        attrs: {
            body: {
            refPoints: '10,0 40,0 30,20 0,20',
            },
        },
        label: '数据',
    })
    // 连接
    const r6 = graph.createNode({
        shape: 'custom-circle',
        label: '连接',
    })
    // stencil.load([r1, r1_1, r1_2, r1_3, r1_4],'group1')
    stencil.load([ r1_1, r1_2, r1_3, r1_4],'group1')
    stencil.load([r2_1],'group2')
    stencil.load([r3_1,r3_2,r3_3,r3_4,r3_5],'group3')
    stencil.load([r4_1,r4_2,r4_3],'group4')
    stencil.load([r2, r3, r4, r5, r6], 'group5')

    const imageShapes = [
    {
        label: 'Client',
        image:
        'https://gw.alipayobjects.com/zos/bmw-prod/687b6cb9-4b97-42a6-96d0-34b3099133ac.svg',
    },
    {
        label: 'Http',
        image:
        'https://gw.alipayobjects.com/zos/bmw-prod/dc1ced06-417d-466f-927b-b4a4d3265791.svg',
    },
    {
        label: 'Api',
        image:
        'https://gw.alipayobjects.com/zos/bmw-prod/c55d7ae1-8d20-4585-bd8f-ca23653a4489.svg',
    },
    {
        label: 'Sql',
        image:
        'https://gw.alipayobjects.com/zos/bmw-prod/6eb71764-18ed-4149-b868-53ad1542c405.svg',
    },
    {
        label: 'Clound',
        image:
        'https://gw.alipayobjects.com/zos/bmw-prod/c36fe7cb-dc24-4854-aeb5-88d8dc36d52e.svg',
    },
    {
        label: 'Mq',
        image:
        'https://gw.alipayobjects.com/zos/bmw-prod/2010ac9f-40e7-49d4-8c4a-4fcf2f83033b.svg',
    },
    ]
    const imageNodes = imageShapes.map((item) =>
        graph.createNode({
            shape: 'custom-image',
            label: item.label,
            attrs: {
            image: {
                'xlink:href': item.image,
            },
            },
        }),
    )
    stencil.load(imageNodes, 'group6')

    const stencilContainer = document.querySelector('#stencil')
    if (stencilContainer) {
      stencilContainer.appendChild(stencil.container)
    }

    return stencil;
}