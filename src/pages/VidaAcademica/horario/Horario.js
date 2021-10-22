import React from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd';

import '../styles.css';
import TableComponent from './TableComponent';

const Horario = () => {


    return (
            <Container className="mt-4" style={{ height: 'auto' }}> 
                <h1>Horário Atual</h1>
                <hr className="mb-4"></hr>

                <TableComponent/>
                
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

