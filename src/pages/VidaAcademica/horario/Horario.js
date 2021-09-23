import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Table, Button } from 'antd';

import '../styles.css';

const Horario = () => {
    const [materias, setMaterias] = useState([]);

    const columns = [
        { 
            title: 'Turma', 
            dataIndex: 'turma', 
            key: 'turma' 
        },
        { 
            title: 'Disciplina', 
            dataIndex: 'nome', 
            key: 'nome' 
        },
        { 
            title: 'Qtd Reprovação (Após 2017/1)', 
            dataIndex: 'qtd_reprovacao', 
            key: 'qtd_reprovacao',
        },
        { 
            title: 'Professor', 
            dataIndex: 'professor', 
            key: 'professor' 
        },
        { 
            title: 'Horário 1', 
            dataIndex: 'horario_1', 
            key: 'horario_1' 
        },
        { 
            title: 'Horário 2', 
            dataIndex: 'horario_2', 
            key: 'horario_2' 
        }
    ];

    useEffect(() => {
        const url = window.servidor + '/materias/cursando';
        fetch(url)
            .then(res => res.json())
            .then(data => setMaterias(data));
    }, []);


    return (
            <Container className="mt-4" style={{ maxHeight: '60vh' }}> 
                <h1>Horário Atual</h1>
                <hr className="mb-4"></hr>
                <Table
                    columns={columns}
                    dataSource={materias}
                    pagination={false}
                />
                
                <Button 
                    type="primary"
                    size="large" 
                    className="mt-3"
                    href="/VidaAcademica/Comprovante"
                >
                    Gerar comprovante
                </Button>
            </Container>
    )
}

export default Horario

