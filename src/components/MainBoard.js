import React, {useContext} from 'react';
import TableContext from "../context/table/tableContext";
import ReactFlow from 'react-flow-renderer';
import TableList from "./TableList";
import TableItem from "./TableItem";

const MainBoard = () => {

    const tableContext = useContext(TableContext);
    const { tables } = tableContext;
    return (
        <div className="p-4 rounded-lg col-span-9">
            <ReactFlow elements={tables.map((table, index) => ({
                id: `table_${index}`,
                type: 'input', // input node
                data: { label: <TableItem table={table} tableIndex={index} /> },
                position: { x: 100 + (index * 120), y: 10+ (index * 90) },
            }))} />
        </div>
    );
};

export default MainBoard;
