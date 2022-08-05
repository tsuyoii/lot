import { Divider, Input, Row, Space } from "antd"
import React, { useEffect, useState } from "react"

interface Params {
    builder: string;
    cell?:any ;
    cellId?:string;
}


export const FakeData: React.FC<Params> = (props) => {
    const [message,setMessage] = useState('')
    const [property,setProperty] = useState('')

    useEffect(()=>{
        if(props){
            const cells = props.cell?.toJSON()
            setMessage(cells.config?.message)
            setProperty(cells.config?.property)
        }
   
    },[props.cellId])

    useEffect(()=>{
        props.cell?.prop('config', {
            message,
            property
        }) 
    },[props.cellId,message,property])

    return (
        <Space direction="vertical">
            <Divider plain>Input</Divider>
                <Row>
                    Message
                </Row>
                <Row>
                    <Input placeholder="e.g.My Debug Message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                </Row>
            <Divider plain>Output</Divider>
                <Row>
                    Property
                </Row>
                <Row>
                    <Input placeholder="e.g.data.foo"  value={property} onChange={(e)=>setProperty(e.target.value)}/>
                </Row> 
        </Space>
    )
}