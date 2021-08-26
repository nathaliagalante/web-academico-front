import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

import './AtualizarCadastro.css';
import useForm from './useForm';

const AtualizarCadastro = () => {
    const { onHandleChange, values, handleSubmit} = useForm();

    return (
        <div>
            <Container className="mt-5">
                <h1>Atualizar Cadastro</h1>
                <hr></hr>

                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={values.email} onChange={onHandleChange} type="email" placeholder="Email" name="email" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridTelefone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control value={values.telefone} onChange={onHandleChange} type="text" placeholder="Telefone" name="telefone" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGridCelular">
                                <Form.Label>Celular</Form.Label>
                                <Form.Control value={values.celular} onChange={onHandleChange} type="text" placeholder="Celular" name="celular" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridEndereço">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control value={values.endereco} onChange={onHandleChange} placeholder="Rua Tenente Coronel Amado" name="endereco" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="formGridNumero">
                                <Form.Label>Número</Form.Label>
                                <Form.Control value={values.numero} onChange={onHandleChange} placeholder="577" name="numero" />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group controlId="formGridComplemento">
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control value={values.complemento} onChange={onHandleChange} placeholder="ex: Apartamento" name="complemento" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="formGridBairro">
                                <Form.Label>Bairro</Form.Label>
                                <Form.Control value={values.bairro} onChange={onHandleChange} placeholder="Bairro" name="bairro" />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group controlId="formGridCidade">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control value={values.cidade} onChange={onHandleChange} placeholder="Cidade" name="cidade" />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group controlId="formGridCep">
                                <Form.Label>CEP</Form.Label>
                                <Form.Control value={values.cep} onChange={onHandleChange} placeholder="CEP" name="cep" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button className="mt-2" variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default AtualizarCadastro
