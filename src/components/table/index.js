import React from 'react';
import { Table } from 'react-bootstrap'
import { useTable } from 'react-table'

function TableComponent({columns, data}){
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
      });

    return(
        <Table responsive bordered {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th className="text-center" {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        // <Table responsive bordered>
        //     <thead>
        //         <tr>
        //             {props.th && props.th.map(item => {
        //                 return <th scope="col" className="text-center">{item}</th>
        //             })}
        //         </tr>
        //      </thead>
        //     <tbody>
        //         {/* {props.th && props.th.map(th => {
                    
        //         })} */}
        //         {props.items && props.items.map(item => {
        //         return <tr key={item.id}>
        //             <th className="text-center" scope="row">{item.periodo}</th>
        //             <td className="text-center">{item.semestre}</td>
        //             <td>{item.nome}</td>
        //             <td>{item.professor}</td>
        //             <td className="text-center">{item.nota}</td>
        //             <td className="text-center">{item.situacao}</td>
        //             </tr>
        //         })}
        //     </tbody>
        // </Table>  
    )
}

export default TableComponent;
  