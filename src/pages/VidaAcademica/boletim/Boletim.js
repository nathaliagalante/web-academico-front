import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import TableComponent from '../../../components/table';

import '../styles.css';

const Boletim = () => {
    const [materias, setMaterias] = useState([]);
    const [estagio, setEstagio] = useState([]);
    const [tcc, setTCC] = useState([]);

    const columnsMaterias = React.useMemo(() => [
        {
            Header: 'Turmas',
            columns: [
                {
                    Header: 'Disciplina',
                    accessor: 'nome'
                },
                {
                    Header: 'Professor',
                    accessor: 'professor'
                },
            ]
        },
        {
            Header: 'Notas',
            columns: [
                {
                    Header: 'Nota 1',
                    accessor: 'nota_1'
                },
                {
                    Header: 'Nota 2',
                    accessor: 'nota_2'
                },
                {
                    Header: 'Média',
                    accessor: 'media'
                },
                {
                    Header: 'Final',
                    accessor: 'nota_final'
                },
                {
                    Header: 'Média Final',
                    accessor: 'media_final'
                },
            ]
        },
        {
            Header: 'Frequência',
            columns: [
                {
                    Header: 'Faltas',
                    accessor: 'faltas'
                },
                {
                    Header: 'Qtd. Aulas',
                    accessor: 'qtd_aulas'
                },
                {
                    Header: '%',
                    accessor: 'percent_faltas'
                },
                {
                    Header: 'Situação',
                    accessor: 'situacao'
                },
            ]
        }
    ], []);

    const columnsEstagio = React.useMemo(() => [
        {
            Header: 'Período',
            accessor: 'periodo'
        },
        {
            Header: 'Disciplina',
            accessor: 'nome'
        },
        {
            Header: 'Professor',
            accessor: 'professor'
        },
        {
            Header: 'Nome da Empresa',
            accessor: 'nome_empresa'
        },
        {
            Header: 'Período Letivo',
            accessor: 'periodo_letivo'
        },
        {
            Header: 'Carga Horária',
            accessor: 'carga_horaria'
        },
        {
            Header: 'Resultado',
            accessor: 'resultado'
        }
    ], []);

    const columnsTcc = React.useMemo(() => [
        {
            Header: 'Período',
            accessor: 'periodo'
        },
        {
            Header: 'Disciplina',
            accessor: 'nome'
        },
        {
            Header: 'Professor',
            accessor: 'professor'
        },
        {
            Header: 'Período Letivo',
            accessor: 'periodo_letivo'
        },
        {
            Header: 'Nota',
            accessor: 'nota'
        },
        {
            Header: 'Resultado',
            accessor: 'resultado'
        }
    ], []);

    
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
        <Container className="mt-5">
                <h1>Boletim</h1>
                <hr className="mb-4"></hr>
                <TableComponent columns={columnsMaterias} data={materias} headerColor="blue-primary" />
                <TableComponent columns={columnsEstagio} data={estagio} headerColor="blue-primary"/>
                <TableComponent columns={columnsTcc} data={tcc} headerColor="blue-primary"/> 
        </Container>
    )
}

export default Boletim