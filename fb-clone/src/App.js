import React from 'react';
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"

function App() {
  return (
    <div className="App">
      
      {/* header component */}
      <Header />

      <div className="app_body">
        {/* SideBar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </div>
        

    </div>
  );
}

export default App;
