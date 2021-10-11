import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Table } from 'antd';

import '../styles.css';

const Boletim = () => {
    const [materias, setMaterias] = useState([]);
    const [estagio, setEstagio] = useState([]);
    const [tcc, setTCC] = useState([]);

    const columnsMaterias = [
        { 
            title: 'Turmas', 
            children: [
                {
                    title: 'Disciplina',
                    dataIndex: 'nome',
                    key: 'nome'
                },
                {
                    title: 'Professor',
                    dataIndex: 'professor',
                    key: 'professor'
                }
            ]
        },
        { 
            title: 'Notas', 
            children: [
                {
                    title: 'Nota 1',
                    dataIndex: 'nota_1',
                    key: 'nota_1'
                },
                {
                    title: 'Nota 2',
                    dataIndex: 'nota_2',
                    key: 'nota_2'
                },
                {
                    title: 'Média',
                    dataIndex: 'media',
                    key: 'media'
                },
                {
                    title: 'Final',
                    dataIndex: 'nota_final',
                    key: 'nota_final'
                },
                {
                    title: 'Média Final',
                    dataIndex: 'media_final',
                    key: 'media_final'
                }
            ]
        },
        { 
            title: 'Frequência', 
            children: [
                {
                    title: 'Faltas',
                    dataIndex: 'faltas',
                    key: 'faltas'
                },
                {
                    title: 'Qtd. Aulas',
                    dataIndex: 'qtd_aulas',
                    key: 'qtd_aulas'
                },
                {
                    title: '%',
                    dataIndex: 'percent_faltas',
                    key: 'percent_faltas'
                },
                {
                    title: 'Situação',
                    dataIndex: 'situacao',
                    key: 'situacao'
                }
            ]
        }
    ];

    const columnsEstagio = [
        { 
            title: 'Período', 
            dataIndex: 'periodo', 
            key: 'periodo' 
        },
        { 
            title: 'Disciplina', 
            dataIndex: 'nome', 
            key: 'nome' 
        },
        { 
            title: 'Professor', 
            dataIndex: 'professor', 
            key: 'professor' 
        },
        { 
            title: 'Nome da empresa', 
            dataIndex: 'nome_empresa', 
            key: 'nome_empresa' 
        },
        { 
            title: 'Período Letivo', 
            dataIndex: 'periodo_letivo', 
            key: 'periodo_letivo' 
        },
        { 
            title: 'Carga Horária', 
            dataIndex: 'carga_horaria', 
            key: 'carga_horaria' 
        },
        { 
            title: 'Resultado', 
            dataIndex: 'resultado', 
            key: 'resultado' 
        },
    ];

    const columnsTcc = [
        { 
            title: 'Período', 
            dataIndex: 'periodo', 
            key: 'periodo' 
        },
        { 
            title: 'Disciplina', 
            dataIndex: 'nome', 
            key: 'nome' 
        },
        { 
            title: 'Professor', 
            dataIndex: 'professor', 
            key: 'professor' 
        },
        { 
            title: 'Período Letivo', 
            dataIndex: 'periodo_letivo', 
            key: 'periodo_letivo' 
        },
        { 
            title: 'Nota', 
            dataIndex: 'nota', 
            key: 'nota' 
        },
        { 
            title: 'Resultado', 
            dataIndex: 'resultado', 
            key: 'resultado' 
        }
    ];

    useEffect(() => {
        const url = window.servidor;
        fetch(url + '/materias/cursando/boletim')
            .then(res => res.json())
            .then(data => setMaterias(data));

            fetch(url + '/materias/estagio')
            .then(res => res.json())
            .then(data => setEstagio(data));

            fetch(url + '/materias/tcc')
            .then(res => res.json())
            .then(data => setTCC(data));
    }, []);

    return (
        <Container style={{ maxHeight: '60vh' }}>
                <h1>Boletim</h1>
                <hr className="mb-4"></hr>

                <Table 
                    columns={columnsMaterias}
                    dataSource={materias}
                    pagination={false}
                    bordered={true}
                    size="small"
                />

                <Table 
                    style={{ marginTop: '30px' }}
                    columns={columnsEstagio}
                    dataSource={estagio}
                    pagination={false}
                    size="small"
                />

                <Table 
                    style={{ marginTop: '30px' }}
                    columns={columnsTcc}
                    dataSource={tcc}
                    pagination={false}
                    size="small"
                />
        </Container>
    )
}

export default Boletim