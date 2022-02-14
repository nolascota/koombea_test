import React, {useContext} from 'react';
import {TrashIcon} from "@heroicons/react/outline";
import TableContext from "../context/table/tableContext";

const TableItem = ({table, tableIndex, showAddColumn = false, showDeleteOptions= false}) => {
    const tableContext = useContext(TableContext);
    const { tables,deleteTable, addNewColumn, deleteColumn } = tableContext;

    return (
        <div className={` ${showDeleteOptions && 'mt-2 border-2 m-2'} rounded  divide-y`} key={tableIndex}>
            <div className="flex space-x-4 justify-around mb-2 mt-0.5">
                <p className="text-left ">{table.table_name}</p>
                {
                    showDeleteOptions &&  <TrashIcon
                        className="h-5 w-5 text-red-500 mr-2"
                        onClick={() => deleteTable(table.table_name)}
                    />
                }
            </div>
            {table.columns.map((column, columnIndex) => (
                <div  key={columnIndex}>
                    <div className="flex space-x-4 justify-around mb-2 mt-0.5 ">
                        <div>{column.name}</div>
                        <div>{column.type}</div>

                        {
                            showDeleteOptions &&   <TrashIcon
                                className="h-5 w-5 text-red-500 mr-2"
                                onClick={() => deleteColumn(tableIndex,column.name)}
                            />
                        }

                    </div>
                </div>
            ))}
            {
                showAddColumn &&  <button
                    onClick={() => addNewColumn(tableIndex)}
                    type="button"
                    className="mt-2 mb-2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-full text-sm px-1 py-0.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
                    add column
                </button>
            }

        </div>
    );
};

export default TableItem;
