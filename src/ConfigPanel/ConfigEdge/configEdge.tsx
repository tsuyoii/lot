import { Edge } from "@antv/x6";
import { Col, Input, Row, Tabs } from "antd";
import React, { useEffect, useRef, useState } from "react";
import FlowGraph from "../../Graph";

const { TabPane } = Tabs;

interface IProps {
    id: string
}

export default function (props:IProps) {  
    const { id } = props
    const [edgeLabel,setEdgeLabel] = useState<any>('')
    const [expression,setExpr] = useState('')

    const edgeRef = useRef<Edge>()
    useEffect(()=> {
        if (id) {
            const { graph } = FlowGraph
            const cell = graph.getCellById(id)
            if(!cell || !cell.isEdge()) {
                return
            }
            edgeRef.current = cell
            const labels = cell.getLabels();
            if(labels[0] && labels[0].attrs) {
                setEdgeLabel(labels[0].attrs?.label.text)   
            }else{
                setEdgeLabel('')
            }
            
        }
    },[id])

    const onEdgeLabelChange = (e: React.FocusEvent<HTMLInputElement>) => {
        setEdgeLabel(e.target.value)  
        if(edgeRef.current){
            edgeRef.current.setLabels([{
                attrs: { label: { text: e.target.value } },
            }])            
        }
    }

    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="属性" key="1">
                <Row align="middle">
                    <Col span={8}>标签</Col>
                    <Col span={14}>
                        <Input placeholder="标签内容" value={edgeLabel} onChange={onEdgeLabelChange}/>
                    </Col>
                </Row>
                <Row align="middle">
                    <Col span={8}>表达式</Col>
                    <Col span={14}>
                        <Input placeholder="表达式" value={expression}/>
                    </Col>
                </Row>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
            </TabPane>
      </Tabs>
    )
}