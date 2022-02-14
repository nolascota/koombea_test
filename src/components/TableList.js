import React, {useContext} from 'react';
import TableContext from "../context/table/tableContext";
import TableItem from "./TableItem";

const TableList = ({showAddColumn = false, showDeleteOptions= false}) => {
    const tableContext = useContext(TableContext);
    const { tables } = tableContext;

    return (
        <div>
            {tables.map((table, tableIndex) => (
                <TableItem key={tableIndex} table={table} tableIndex={tableIndex} showAddColumn={showAddColumn} showDeleteOptions={showDeleteOptions} />
            ))}
        </div>
    );
};

export default TableList;
