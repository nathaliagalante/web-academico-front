import React from 'react';
import { Table } from 'react-bootstrap'

function TableComponent(props){
    return(
        <Table responsive bordered>
            <thead>
                <tr>
                    {props.th && props.th.map(item => {
                        return <th scope="col" className="text-center">{item}</th>
                    })}
                </tr>
             </thead>
            <tbody>
                {props.items && props.items.map(item => {
                return <tr key={item.id}>
                    <th className="text-center" scope="row">{item.periodo}</th>
                    <td className="text-center">{item.semestre}</td>
                    <td>{item.nome}</td>
                    <td>{item.professor}</td>
                    <td className="text-center">{item.nota}</td>
                    <td className="text-center">{item.situacao}</td>
                    </tr>
                })}
            </tbody>
        </Table>  
    )
}

export default TableComponent;
  