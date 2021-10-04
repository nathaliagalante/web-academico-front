import React, { useState, useEffect } from 'react'
import {  Container } from 'react-bootstrap';
import { Card, Col, Row, Space } from 'antd';
import './Home.css'

const Home = () => {
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
       const url = window.servidor + '/alunos/1';
       fetch(url)
        .then(res => res.json())
        .then(res => setUsuario(res))
    }, [])

    const cardStyle ={
        boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px'
    }

    return (
        
            <Container className="mt-5">
                <h1>Bem-vindo(a), {usuario.firstName}!</h1>
                <hr></hr>

                <Space direction="vertical" style={{width: '100%'}}>
                <Row gutter={[20, 20]} style={{textAlign: 'center'}}>
                    <Col span={8}>
                        <Card title="CR" bordered={false} style={cardStyle}>
                            <h2>{usuario.cr}</h2>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Estado Atual" bordered={false} style={cardStyle}>
                            <h2>{usuario.estadoAtual}</h2>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Concluinte" bordered={false} style={cardStyle}>
                            <h2>{usuario.concluinte}</h2>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Período Atual" bordered={false} style={cardStyle}>
                            <h2>{usuario.periodoAtual}</h2>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Créditos Cursados" bordered={false} style={cardStyle}>
                            <h2>{usuario.creditosCursados}</h2>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="ACG" bordered={false} style={cardStyle}>
                            <h2>{usuario.totalACG}</h2>
                        </Card>
                    </Col>
                </Row>
                </Space>

            </Container>
        
    )
}

export default Home
