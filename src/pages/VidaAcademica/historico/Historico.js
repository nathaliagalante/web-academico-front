import React, { useState, useEffect } from 'react'
import { Container} from 'react-bootstrap'
import TableComponent from '../../../components/table';

import '../styles.css';


const Historico = () => {
    const [materias, setMaterias] = useState([]);
    
    const columns = React.useMemo(() => [
        {
            Header: 'Período',
            accessor: 'periodo'
        },
        {
            Header: 'Semestre',
            accessor: 'semestre'
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
            Header: 'Nota',
            accessor: 'nota'
        },
        {
            Header: 'Situação',
            accessor: 'situacao'
        }
    ], []);


    useEffect(function(){
        const url = window.servidor + '/materias';
        fetch(url)
            .then(res => res.json())
            .then(data => setMaterias(data))
    }, []);
    
    return (
            <Container>
                <h1 className="heading--table mb-4">Histórico</h1>
                <TableComponent columns={columns} data={materias} />
            </Container>
    )
}

export default Historico
