import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { Table } from 'antd';

const ConsultarACG = () => {
    const [acgs, setAcgs] = useState([]);

    const columns = [
        { title: 'Categoria', dataIndex: 'categoria', key: 'categoria'},
        { title: 'Horas', dataIndex: 'horas', key: 'horas'}
    ]

    const columnsDetalhes = [
        { title: 'Data', dataIndex: 'data', key: 'data' },
        { title: 'Descrição', dataIndex: 'descricao', key: 'descricao' },
        { title: 'Horas', dataIndex: 'horas', key: 'horas' }
    ]

    useEffect(() => {
        const url = window.servidor + '/acgs';
        fetch(url)
            .then(res => res.json())
            .then(data => setAcgs(data));
    }, []);

    return (
        <>
            <Container className="mt-3" style={{ maxHeight: '60vh' }}>
                <h1>ACGs</h1>
                <hr></hr>
                <Table 
                    columns={columns}
                    dataSource={acgs}
                    pagination={false} 
                    expandable={{
                        expandedRowRender: record => 
                            <Table 
                                style={{margin: 0}}
                                columns={columnsDetalhes} 
                                dataSource={record.detalhes} 
                                pagination={false} 
                            />
                        ,
                        rowExpandable: record => record.categoria
                    }}
                />
            </Container>

        </>
    
    )
}

export default ConsultarACG
