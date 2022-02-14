import React, { useContext } from 'react';
import TableContext from '../context/table/tableContext';

import TableList from "./TableList";
const Sidebar = () => {
  const tableContext = useContext(TableContext);
  const { tables, addNewTable,deleteTable, addNewColumn, deleteColumn } = tableContext;

  return (
    <div className="mt-0 border-r-2 rounded-lg col-span-3 h-screen bg-white">
      <div className="flex items-center border-grey border-b-2 py-2 z-40 shadow-md leading-tight">
        <div className="text-gray-500 text-lg ml-3">Tables</div>
        <div className="flex-grow"></div>
        <button
          className="flex-shrink-0 flex-grow-0 bg-teal-500 hover:bg-teal-600 border-teal-500 hover:border-teal-600 border-2 text-white text-sm py-2 px-2 mr-3 rounded focus:outline-none has-tooltip"
          data-original-title="null"
          onClick={addNewTable}
        >
          New Table
        </button>
      </div>
      <TableList showAddColumn={true} showDeleteOptions={true}/>

    </div>
  );
};

export default Sidebar;
