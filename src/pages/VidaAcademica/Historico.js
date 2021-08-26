import React, { useState, useEffect } from 'react'
import { Container} from 'react-bootstrap'
import TableComponent from '../../components/table';

import './styles.css';


const Historico = () => {
    const [materias, setMaterias] = useState([]);
    const theadings = ['Período', 'Semestre', 'Disciplina', 'Professor', 'Nota', 'Situação'];

    useEffect(function(){
        const url = window.servidor + '/materias';
        fetch(url)
            .then(respostaDoServidor => respostaDoServidor.json())
            .then(respostaCompleta => setMaterias(respostaCompleta))
    }, [])
    
    return (
            <Container>
                <h1 className="heading--table mb-4">Histórico</h1>
                <TableComponent th={theadings} items={materias} />
            </Container>
    )
}

export default Historico
