import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

import useForm from './useForm';

const AlterarSenha = () => {
    const { handleChange, values, handleSubmit } = useForm();

    return (
            <Container className="mt-5">
                <h1>Alterar Senha</h1>
                <hr></hr>

                <Form className="mt-5" onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Senha Atual
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control value={values.senhaAtual} onChange={handleChange} type="password" placeholder="Senha" name="senhaAtual" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Nova Senha
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control value={values.senhaNova} onChange={handleChange} type="password" placeholder="Senha" name="senhaNova" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Confirme Nova Senha
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control value={values.senhaConfirmada} onChange={handleChange} type="password" placeholder="Senha" name="senhaConfirmada" />
                        </Col>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-2">
                        Enviar
                    </Button>
                </Form>
            </Container>
    )
}

export default AlterarSenha
