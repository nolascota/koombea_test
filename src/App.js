import React from 'react';
import './index.css';
import Sidebar from "./components/Sidebar";
import MainBoard from "./components/MainBoard";
import TableState from "./context/table/tableState";
const App = () => {
    return (
        <TableState>
            <div className="h-screen bg-gray-100 overflow-hidden">
                <main className="grid grid-cols-12 font-mono text-sm text-center font-bold leading-6">
                    <Sidebar/>
                    <MainBoard />
                </main>
            </div>
        </TableState>

    );
};

export default App;
