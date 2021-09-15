import React, {useState, useMemo, useEffect} from 'react';
import { Container, Button } from 'react-bootstrap';

import TableComponent from '../../../components/table';

const ConsultarACG = () => {
    const [acgs, setAcgs] = useState([]);

    const columns = useMemo(() => [
        {
            Header: 'Categoria',
            accessor: 'categoria'
        },
        {
            Header: 'Horas',
            accessor: 'horas',
        },
        {
            Header: '',
            accessor: 'detalhes',
            Cell: props => <Button variant="info">Detalhes</Button>,
        }
    ], []);

    useEffect(() => {
        const url = window.servidor + '/acgs';
        fetch(url)
            .then(res => res.json())
            .then(data => setAcgs(data));
    }, []);

    return (
        <Container className="">
            <h1>ACGs</h1>
            <hr></hr>
            <TableComponent columns={columns} data={acgs} />
        </Container>
    
    )
}

export default ConsultarACG
