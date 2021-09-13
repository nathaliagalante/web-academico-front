import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import TableComponent from '../../../components/table';

import '../styles.css';

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
            accessor: 'horario_1'
        },
        {
            Header: 'Horário 2',
            accessor: 'horario_2'
        }
    ], []);

    useEffect(() => {
        const url = window.servidor + '/materias/cursando';
        fetch(url)
            .then(res => res.json())
            .then(data => setMaterias(data));
    }, []);


    return (
            <Container className="mt-5"> 
                <h1>Horário</h1>
                <hr className="mb-4"></hr>
                <TableComponent columns={columns} data={materias} />
                <Link to="/VidaAcademica/Comprovante" className="btn btn-primary mt-2">Gerar Comprovante</Link>
            </Container>
    )
}

export default Horario

