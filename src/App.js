import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  let loadUsers = async () =>{
    let userData = await fetch("https://reqres.in/api/users?page=1");
    
    let userDataInJson = await userData.json();
    
    setUsers(userDataInJson.data);
  };
  return (
    <div className="App">

<nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <h2 className="navbar-brand">Lets Grow More TASK-2</h2>
            <button onClick={loadUsers} className="btn btn-info">
              Get Users
            </button>
          </div>
        </nav>


      <div className='d-flex justify-content-around'>

      {users.map(({id, email, first_name, last_name, avatar}) => (
          <div key={id} className="container-fluid">
            <img src={avatar}/>
            <div className='card-title'>
            my name is {first_name + last_name}
            <br />
            my mail id : 
            {email}
            
            </div>
            </div>
))}
      </div>
      <footer className="footer">
          <span className="text-muted">by Sahil chopra</span>
        </footer>
    </div>
  );
}

export default App;
