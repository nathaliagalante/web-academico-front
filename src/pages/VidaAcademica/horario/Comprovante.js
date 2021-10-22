import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap';
import { Descriptions, Button } from 'antd';

import '../styles.css';
import TableComponent from './TableComponent';

const Comprovante = () => {
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        const url = window.servidor + '/alunos/1';
        fetch(url)
            .then(res => res.json())
            .then(data => setUsuario(data))
            .catch(erro => console.log(erro));
    })

    return (
        <>
        <Container className="p-4" style={{backgroundColor: 'white', height: 'auto', margin: '180px 0 30px 0'}}>
            <div className="logo-box">
                <img class="logo-femass" src="../../img/logo-femass.png" alt="Femass logo"></img>
            </div>

            <div className="primary-heading">
                <h1>Comprovante de Matrícula</h1>
            </div>
            <hr></hr>

            <Descriptions className="mt-3" title="Informações do Aluno" column={4} >
                <Descriptions.Item label="Nome">{usuario.firstName} {usuario.lastName}</Descriptions.Item>
                <Descriptions.Item label="Curso">{usuario.curso}</Descriptions.Item>
                <Descriptions.Item label="Matrícula">{usuario.matricula}</Descriptions.Item>
                <Descriptions.Item label="Turno">{usuario.turno}</Descriptions.Item>
            </Descriptions>

            <TableComponent />

        </Container>

        <Button
                type="primary"
                size="large"
                className="mb-4"
                href="/VidaAcademica/Horario"
            >
                Voltar
        </Button>
        </>
      
    )
}

export default Comprovante
