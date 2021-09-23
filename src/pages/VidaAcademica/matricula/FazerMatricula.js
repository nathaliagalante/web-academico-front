import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Table, Button, message } from 'antd';

const FazerMatricula = () => {
    const [materias, setMaterias] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const key = 'updatable';

    const columns = [
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

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          setSelectedRows(selectedRows);
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
          name: record.name,
        }),
    };

    useEffect(() => {
        const url = window.servidor + '/materias/cursando';
        fetch(url)
            .then(res => res.json())
            .then(data => setMaterias(data));
    })

    const handleOnClick = () => {
        if(selectedRows.length === 0){
            message.error({ 
                content: 'Nenhuma disciplina selecionada', 
                key, 
                duration: 3,
                style: {
                    marginTop: '10vh',
                    marginLeft: '140vh'
                  }, 
            });
        }else{
            message.loading({ 
                content: 'Carregando...', 
                key,
                style: {
                    marginTop: '10vh',
                    marginLeft: '160vh',
                  },  
            });
    
            setTimeout(() => {
                message.success({ 
                    content: 'Matrícula salva!', 
                    key, 
                    duration: 2,
                    style: {
                        marginTop: '10vh',
                        marginLeft: '160vh'
                      }, 
                });
            }, 1000);
        }
        
    }

    return (
        <Container className="mt-4" style={{ maxHeight: '60vh' }}>
            <h1>Matrícula</h1>
            <hr className="mb-4"></hr>
            <Table 
                columns={columns}
                dataSource={materias}
                rowSelection={{
                    ...rowSelection
                }}
                style={{position: 'relative'}}
            />
            <Button 
                className="btn-matricula"
                type="primary"
                size="large"
                onClick={handleOnClick}
            >
                Salvar
            </Button>
        </Container>
    )
}

export default FazerMatricula
