import React from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color: 'aqua',
    fontSize: 24,
    padding : 'lrem'
  }
  return (
    <div className="App">
      <>
      <UserList/>
      </>
     
    </div>
  );
}

export default App;
