import React, { useState, useEffect } from 'react'

import { Table } from 'antd';

const TableComponent = () => {
    const [materias, setMaterias] = useState([]);

    const columns = [
        {
            title: 'Disciplinas matriculadas',
            children: [
                { 
                    title: 'Turma', 
                    dataIndex: 'turma', 
                    key: 'turma' 
                },
                { 
                    title: 'Disciplina', 
                    dataIndex: 'nome', 
                    key: 'nome' 
                },
                { 
                    title: 'Qtd Reprovação (Após 2017/1)', 
                    dataIndex: 'qtd_reprovacao', 
                    key: 'qtd_reprovacao',
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
            ]
        }
        
    ];

    useEffect(() => {
        const url = window.servidor + '/materias/cursando';
        fetch(url)
            .then(res => res.json())
            .then(data => setMaterias(data));
    }, []);

    return (
        <Table
            columns={columns}
            dataSource={materias}
            pagination={false}
            bordered
        />
    )
}

export default TableComponent
