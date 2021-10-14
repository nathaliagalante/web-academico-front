import React, { useState, useContext} from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { Button, message } from 'antd';

import './AtualizarCadastro.css';
import { UserContext } from '../../../services/UserContext';

const AtualizarCadastro = () => {
    const {usuario} = useContext(UserContext);

    const [values, setValues] = useState({
        email: 'nathalia@femass.com',
        telefone: '2762 2762',
        celular: '99988877',
        endereco: 'Rua N',
        numero: '1',
        complemento: 'Casa',
        bairro: 'Centro',
        cidade: 'Macaé',
        cep: '29837-945'
    });
    const key = 'updatable';

    const onHandleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        const dados = {
            ...values
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(dados)
        };

        const url = window.servidor + '/alunos/atualizarCadastro/1';
        fetch(url, requestOptions)
            .then(res => res.json())
            .then(dados => {
                const {key, value} = Object.entries(dados);
                setValues({
                    ...values,
                    [key]: value
                })
            })
            .catch(erro => console.log(erro));
    };

    const handleClick = () => {
        console.log(usuario);
        message.loading({ 
            content: 'Carregando...', 
            key,
            style: {
                position: 'fixed',
                top: '13vh',
                right: '18vh'
              },  
        });

        setTimeout(() => {
            message.success({ 
                content: 'Dados enviados!', 
                key, 
                duration: 2,
                style: {
                    position: 'fixed',
                    top: '13vh',
                    right: '18vh'
                  }, 
            });
        }, 1000);
    }

    return (
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

                    <Button className="mt-2" 
                        type="primary" 
                        style={{width: '150px'}}
                        onClick={handleClick}
                        htmlType="submit">
                        Enviar
                    </Button>
                </Form>
            </Container>
    )
}

export default AtualizarCadastro
