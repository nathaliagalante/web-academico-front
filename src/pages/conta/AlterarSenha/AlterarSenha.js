import React, { useState} from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { Button, message } from 'antd';

const AlterarSenha = () => {
    const [values, setValues] = useState({
        senhaAtual: '',
        senhaNova: '',
        senhaConfirmada: ''
    });

    const key = 'updatable';

    const handleChange = e => {
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

        const url = window.servidor + '/alunos/alterarSenha/1';
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
                <h1>Alterar Senha</h1>
                <hr></hr>

                <Form className="mt-4" onSubmit={handleSubmit}>
                    <Form.Group className="mb-4" controlId="formPlaintextPassword">
                        <Form.Label>Senha atual</Form.Label>
                        <Form.Control value={values.senhaAtual} onChange={handleChange} type="password" name="senhaAtual" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formPlaintextPassword">
                        <Form.Label>Nova senha</Form.Label>
                        <Form.Control value={values.senhaNova} onChange={handleChange} type="password" name="senhaNova" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label>Confirme a nova senha</Form.Label>
                        <Form.Control value={values.senhaConfirmada} onChange={handleChange} type="password" name="senhaConfirmada" />
                    </Form.Group>

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

export default AlterarSenha
