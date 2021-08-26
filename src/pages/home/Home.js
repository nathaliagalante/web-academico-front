import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
       const url = window.servidor + '/alunos/1';
       fetch(url)
        .then(res => res.json())
        .then(res => setUsuario(res))
    }, [])

    // const usuario = {
    //     nome: 'Nathalia',
    //     CR: '7.9',
    //     estadoAtual: 'Cursando',
    //     concluinte: 'Sim',
    //     periodoAtual: '8',
    //     creditosCursados: '192',
    //     totalACG: '50'
    // };

    return (
        
            <Container >
                <h1 className="">Bem-vindo(a), {usuario.firstName}!</h1>
                <hr className="mb-5"></hr>

                <div className="cards-container">
                    <Row className="gx-5 gy-4">
                        <Col md={4}>
                            <Card>
                                <div className="card-info">
                                    <p>CR</p>
                                    <h2>{usuario.cr}</h2>
                                </div>
                            </Card> 
                        </Col>
                        <Col md={4}>
                            <Card>
                                <div className="card-info">
                                    <p>Estado Atual</p>
                                    <h2>{usuario.estadoAtual}</h2>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <div className="card-info">
                                    <p>Concluinte</p>
                                    <h2>{usuario.concluinte}</h2>
                                </div>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card>
                                <div className="card-info">
                                    <p>Período Atual</p>
                                    <h2>{usuario.periodoAtual}</h2>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <div className="card-info">
                                    <p>Créditos Cursados</p>
                                    <h2>{usuario.creditosCursados}</h2>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <div className="card-info">
                                    <p>ACG</p>
                                    <h2>{usuario.totalACG}</h2>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    
                </div>

            </Container>
        
    )
}

export default Home
