
export const tableReducerTypes = {
    ADD_NEW_TABLE : 'ADD_NEW_TABLE',
    DELETE_TABLE : 'DELETE_TABLE',
    ADD_NEW_COLUMN : 'ADD_NEW_COLUMN',
    DELETE_COLUMN : 'DELETE_COLUMN',
}
export const initialState = {
    tables: []
}
export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case tableReducerTypes.ADD_NEW_TABLE:
            return {
                ...state,
                tables: [...state.tables, {
                    table_name: `table_${state.tables.length +1}`,
                    columns: [{
                        name: 'id',
                        type: 'int'
                    }]
                }]
            }
        case tableReducerTypes.DELETE_TABLE:
            return {
                ...state,
                tables: state.tables.filter((table) => table.table_name !== action.payload)
            }
        case tableReducerTypes.ADD_NEW_COLUMN:
            return {
                ...state,
                ...state.tables[action.payload].columns = [
                    ...state.tables[action.payload].columns, {
                        name: `column_${state.tables[action.payload].columns.length}`,
                        type: 'string'
                    }
                ] ,
            }
        case tableReducerTypes.DELETE_COLUMN:
            return {
                ...state,
                ...state.tables[action.payload.tableIndex].columns = state.tables[action.payload.tableIndex].columns.filter(column => column.name !== action.payload.columnName)
            }
        default : return state;
    }
}
