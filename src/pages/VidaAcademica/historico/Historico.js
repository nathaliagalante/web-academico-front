import React, { useState, useEffect, useRef, useContext } from 'react'
import { Container} from 'react-bootstrap'

import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import '../styles.css';
import { UserContext } from '../../../services/UserContext';


const Historico = () => {
    const { usuario } = useContext(UserContext);
    const [materias, setMaterias] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    let searchInput = useRef(null);

    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                confirm({ closeDropdown: false });
                setSearchText(selectedKeys[0]);
                setSearchedColumn(dataIndex);
                }}
              >
                Filter
              </Button>
            </Space>
          </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
          record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => searchInput.select(), 100);
          }
        },
        render: text =>
          searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
        ),
    });
    
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    
    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('');
    };

    const columns = [
        { 
            title: 'Período', 
            dataIndex: 'periodo', 
            key: 'periodo',
            ...getColumnSearchProps('periodo'), 
        },
        { 
            title: 'Semestre', 
            dataIndex: 'semestre', 
            key: 'semestre' 
        },
        { 
            title: 'Disciplina', 
            dataIndex: 'nome', 
            key: 'nome',
            ...getColumnSearchProps('nome'),  
        },
        { 
            title: 'Professor', 
            dataIndex: 'professor', 
            key: 'professor' 
        },
        { 
            title: 'Nota', 
            dataIndex: 'nota', 
            key: 'nota' 
        },
        { 
            title: 'Situação', 
            dataIndex: 'situacao', 
            key: 'situacao' 
        }
    ];
    
    useEffect(function(){
        const url = window.servidor + '/materias';
        fetch(url)
            .then(res => res.json())
            .then(data => setMaterias(data))
    }, []);
    
    return (
            <Container style={{ maxHeight: '60vh' }}>
                <h1>Histórico</h1>
                <hr className="mb-4"></hr>
                <Table 
                    columns={columns}
                    dataSource={materias}
                    pagination={{ pageSize: 5 }}
                />
            </Container>
    )
}

export default Historico
