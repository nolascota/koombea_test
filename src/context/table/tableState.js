import React, {useReducer} from 'react';
import TableContext from "./tableContext";
import {initialState, tableReducer, tableReducerTypes} from "./reducers/tableReducer";
const TableState = ({children}) => {

    const [state, dispatch] = useReducer(tableReducer, initialState);

    const addNewTable = () => {
        dispatch({
            type: tableReducerTypes.ADD_NEW_TABLE
        });
    };

    const deleteTable = (tableName) => {
        dispatch({
            type: tableReducerTypes.DELETE_TABLE,
            payload: tableName
        });
    };
    const addNewColumn = (tableIndex) => {
        dispatch({
            type: tableReducerTypes.ADD_NEW_COLUMN,
            payload: tableIndex
        });
    };
    const deleteColumn = (tableIndex, columnName) => {
        dispatch({
            type: tableReducerTypes.DELETE_COLUMN,
            payload: {
                tableIndex, columnName
            }
        })
    };


    return (
        <TableContext.Provider value={{
            tables: state.tables,
            addNewTable,
            deleteTable,
            addNewColumn,
            deleteColumn,
        }}>
            {
                children
            }
        </TableContext.Provider>
    );
}

export default TableState;
