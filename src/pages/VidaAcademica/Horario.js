import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import TableComponent from '../../components/table';

import './styles.css';

const Horario = () => {
    const [materias, setMaterias] = useState([]);

    const columns = React.useMemo(() => [
        {
            Header: 'Turma',
            accessor: 'turma'
        },
        {
            Header: 'Disciplina',
            accessor: 'nome'
        },
        {
            Header: 'Qtd Reprovação (Após 2017/1)',
            accessor: 'qtd_reprovacao'
        },
        {
            Header: 'Professor',
            accessor: 'professor'
        },
        {
            Header: 'Horário 1',
            accessor: 'horario_inicio'
        },
        {
            Header: 'Horário 2',
            accessor: 'horario_fim'
        }
    ], []);

    useEffect(() => {
        const url = window.servidor + '/materias/cursando';
        fetch(url)
            .then(res => res.json())
            .then(data => setMaterias(data));
    });

    return (
        <div>
            <Container> 
                <h1 className="mb-4">Consultar Horário</h1>
                <TableComponent columns={columns} data={materias} />
            </Container>
        </div>
    )
}

export default Horario

