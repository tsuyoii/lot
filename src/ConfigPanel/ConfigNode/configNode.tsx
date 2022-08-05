import React, { useEffect, useState, useRef } from 'react'
import { Tabs, Row, Col, Input, Slider, Space } from 'antd'
import { Cell } from '@antv/x6'
import FlowGraph from '../../Graph'
import { useAsyncComponent } from '../../asyncComponent'
import { CATEGORY_PARAM } from '../../nodeComponents/componentPath'

const { TabPane } = Tabs

interface IProps {
  id: string,
  category: string
}
interface NodeAttrs {
  stroke: string
  strokeWidth: number
  fill: string
  fontSize: number
  color: string
}

export default function (props: IProps) {
  const { id,category } = props
  const [attrs, setAttrs] = useState<NodeAttrs>({
    stroke: '#5F95FF',
    strokeWidth: 1,
    fill: 'rgba(95,149,255,0.05)',
    fontSize: 12,
    color: 'rgba(0,0,0,0.85)',
  })
  const cellRef = useRef<Cell>()
  const [nodeLabel,setNodeLabel] = useState<any>()
  // const [NodeSet,setNodeSet] = useState<React.FC>()
  

  useEffect(() => {
    if (id) {
      const { graph } = FlowGraph
      const cell = graph.getCellById(id)
      if (!cell || !cell.isNode()) {
        return
      }
      cellRef.current = cell
      setAttrs({
        stroke: cell.attr('body/stroke'),
        strokeWidth: cell.attr('body/strokeWidth'),
        fill: cell.attr('body/fill'),
        fontSize: cell.attr('text/fontSize'),
        color: cell.attr('text/fill')
      })
      const attrs = cell.getAttrs()
      setNodeLabel(attrs?.text?.text)  
      cell.on('change:config', ({ cell, current, previous, options}:any) => {
        // console.log(cell, current, previous, options,'变了耶')
        console.log(current, previous,attrs?.text?.text,'变了耶')
      })    
    }
  }, [id])

 

  const NodeSet = useAsyncComponent(CATEGORY_PARAM[category]?.path,id,CATEGORY_PARAM[category]?.param,cellRef.current)

  const setAttr = (key: string, val: any) => {
    setAttrs((prev) => ({
      ...prev,
      [key]: val,
    }))
  }

  const onStrokeChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const val = e.target.value
    setAttr('stroke', val)
    cellRef.current!.attr('body/stroke', val)
  }

  const onStrokeWidthChange = (val: number) => {
    setAttr('strokeWidth', val)
    cellRef.current!.attr('body/strokeWidth', val)
  }

  const onFillChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const val = e.target.value
    setAttr('fill', val)
    cellRef.current!.attr('body/fill', val)
  }

  const onFontSizeChange = (val: number) => {
    setAttr('fontSize', val)
    cellRef.current!.attr('text/fontSize', val)
  }

  const onColorChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const val = e.target.value
    setAttr('color', val)
    cellRef.current!.attr('text/fill', val)
  }


  const onNodeLabelChange = (e: React.FocusEvent<HTMLInputElement>) => {
    setNodeLabel(e.target.value)
    if(cellRef.current){
      cellRef.current.setAttrs({
        label: { text: e.target.value},
      })            
    }
}

  // const NodeSet = useAsyncComponent(() => import('./nodeSet'))
  // const NodeSet = useAsyncComponent('nodeSet',{
  //   id:'www',
  //   name:'itachi'
  // })


  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="节点" key="1">
        <Row align="middle">
          <Col span={8}>边框颜色</Col>
          <Col span={14}>
            <Input
              type="color"
              value={attrs.stroke}
              style={{ width: '100%' }}
              onChange={onStrokeChange}
            />
          </Col>
        </Row>
        <Row align="middle">
          <Col span={8}>边框宽度</Col>
          <Col span={12}>
            <Slider
              min={1}
              max={5}
              step={1}
              value={attrs.strokeWidth}
              onChange={onStrokeWidthChange}
            />
          </Col>
          <Col span={2}>
            <div className="result">{attrs.strokeWidth}</div>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={8}>填充颜色</Col>
          <Col span={14}>
            <Input
              type="color"
              value={attrs.fill}
              style={{ width: '100%' }}
              onChange={onFillChange}
            />
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="文本" key="2">
        <Row align="middle">
          <Col span={8}>字体大小</Col>
          <Col span={12}>
            <Slider
              min={8}
              max={32}
              step={1}
              value={attrs.fontSize}
              onChange={onFontSizeChange}
            />
          </Col>
          <Col span={2}>
            <div className="result">{attrs.fontSize}</div>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={8}>字体颜色</Col>
          <Col span={14}>
            <Input
              type="color"
              value={attrs.color}
              style={{ width: '100%' }}
              onChange={onColorChange}
            />
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="设置" key="3">
        <Space direction="vertical">
        <Row>
          <Col span={8}>标签</Col>
        </Row>
        <Row>
          <Input placeholder="标签内容" value={nodeLabel} onChange={onNodeLabelChange}/>
        </Row>
        {NodeSet}
        </Space>
      </TabPane>
    </Tabs>
  )
}
