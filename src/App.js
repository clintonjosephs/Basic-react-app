import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersData, setUsersData] = useState([]);

  const addUserHandler = (user) => {
    setUsersData((prevState) => [...prevState, {...user, id: Math.random().toString()}]);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersData} />
    </div>
  );
}

export default App;
