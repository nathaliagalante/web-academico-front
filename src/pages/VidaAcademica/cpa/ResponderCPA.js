import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Select, Table, Button, message } from 'antd';
import '../styles.css';

const { Option } = Select;

const ResponderCPA = () => {
    const [questionario, setQuestionario] = useState([]);
    // const [respostas, setRespostas] = useState([]);
    const key = 'updatable';

    const columns = [
        { 
            title: '', 
            dataIndex: 'id', 
            key: 'id' 
        },
        { 
            title: 'Enunciado', 
            dataIndex: 'enunciado', 
            key: 'enunciado' 
        },
        { 
            title: 'Resposta', 
            dataIndex: 'resposta', 
            key: 'resposta',
            render: () => {
                return (
                        <Select style={{ width: 200 }} defaultValue="0">
                            <Option value="0">Escolha uma resposta</Option>
                            <Option value="1">Discordo totalmente</Option>
                            <Option value="2">Discordo parcialmente</Option>
                            <Option value="3">Não sei responder</Option>
                            <Option value="4">Concordo parcialmente</Option>
                            <Option value="5">Concordo totalmente</Option>
                        </Select>
                    )
                } 
        },
    ]

    const handleChange = (value) => {
        let url = '';

        switch(value){
            case 'aluno': 
                url = window.servidor + '/questionarios/aluno';
                break;
            case 'gestao': 
                url = window.servidor + '/questionarios/gestao';
                break;
            case 'so': 
                url = window.servidor + '/questionarios/so';
                break;
            case 'estagio': 
                url = window.servidor + '/questionarios/estagio';
                break;
            case 'tcc': 
                url = window.servidor + '/questionarios/tcc';
                break;
            default : url = window.servidor + '/questionarios/aluno'
        }

        console.log(value, url);

        fetch(url)
            .then(res => res.json())
            .then(data => setQuestionario(data))
            .catch(erro => console.log(erro));
    }

    const handleOnClick = () => {
        message.loading({ 
            content: 'Carregando...', 
            key,
            style: {
                position: 'fixed',
                top: '10vh',
                right: '18vh'
              },  
        });

        setTimeout(() => {
            message.success({ 
                content: 'Respostas salvas!', 
                key, 
                duration: 2,
                style: {
                    position: 'fixed',
                    top: '10vh',
                    right: '18vh'
                  }, 
            });
        }, 1000);
    }

    useEffect(() => {
        const url = window.servidor + '/questionarios/aluno';
        fetch(url)
            .then(res => res.json())
            .then(data => setQuestionario(data))
            .catch(erro => console.log(erro));
    }, []);

    return (
        <Container style={{ maxHeight: '65vh' }}>
            <h1>Responder CPA</h1>
            <hr></hr>

            <div className="box__questionarios mt-4" style={{ display: 'flex', alignItems: 'center' }}>
                <h2>Questionários</h2>
                <Select style={{ width: 280 }} defaultValue="aluno" onChange={handleChange}>
                    <Option value="aluno">Autoavaliação do aluno</Option>
                    <Option value="gestao">Avaliação da Gestão/Instituição</Option>
                    <Option value="so">Sistemas Operacionais II</Option>
                    <Option value="estagio">Estágio Supervisionado II (SI)</Option>
                    <Option value="tcc">Trabalho de Conclusão de Curso II - SI</Option>
                </Select>
            </div>

            <Table 
                columns={columns} 
                dataSource={questionario} 
                pagination={false} 
                size="small" 
                className="mt-4" 
            />

            <Button 
                type="primary" 
                className="mt-3 mb-5" 
                style={{width: '150px'}}
                onClick={handleOnClick}
            >
                Enviar
            </Button>
        </Container>
    )
}

export default ResponderCPA
