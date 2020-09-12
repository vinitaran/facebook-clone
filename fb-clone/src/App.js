import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user?(
        <Login />
      ) : (
      <>
      {/* header component */}
      <Header />

      <div className="app_body">
        {/* SideBar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </div>
      </>
      )}
    </div>
  );
}

export default App;
