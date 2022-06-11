import React, { useState, useEffect } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json())
        .then((data) => {
          setUsers(data);
        })
        .catch(err => console.debug(err));
    }, []);

    const handleGoToDetail= (id) => {
      console.log(id);
    };

    return (
      <div>
        <h1>Home Page</h1>
        <ul>
          {users.map(user => {
            return <li key={user.id}>{user.name} | <button onClick={() => handleGoToDetail(user.id)}>Go To Detail</button>     
                   </li>
          })}
        </ul>
      </div>
    );
};

export default Home;
