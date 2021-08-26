import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

const AlterarSenha = () => {
    const [senhaAtual, setSenhaAtual] = useState('');
    const [senhaNova, setSenhaNova] = useState('');
    const [senhaConfirmada, setSenhaConfirmada] = useState('');

    const senhaAtualChange = e => {
        setSenhaAtual(e.target.value);
    }

    const senhaNovaChange = e => {
        setSenhaNova(e.target.value);
    }

    const senhaConfirmadaChange = e => {
        setSenhaConfirmada(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('dados enviados')
    }


    return (
        <div>
            <Container>
                <h1>Alterar Senha</h1>
                <hr></hr>

                <Form className="mt-5" onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Senha Atual
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control value={senhaAtual} onChange={senhaAtualChange} type="password" placeholder="Senha" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Nova Senha
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control value={senhaNova} onChange={senhaNovaChange} type="password" placeholder="Senha" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Confirme Nova Senha
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control value={senhaConfirmada} onChange={senhaConfirmadaChange} type="password" placeholder="Senha" />
                        </Col>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-2">
                        Enviar
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default AlterarSenha
