import React, { useState, useEffect } from 'react';
import { Card } from '../../components/Card';
import './styles.css';

export function Home() {
  const [clientsName, setClientsName] = useState('');
  const [clients, setClients] = useState([]);
  const [user, setUser] = useState({ name: '', avatar_url: '' });

  function handleAddClients() {
    const newClient = {
      name: clientsName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };

    setClients(prevContent => [...prevContent, newClient]);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/augusto-f-rodrigues')
      .then(response => response.json())
      .then(data => setUser({ name: data.name, avatar_url: data.avatar_url }));
  }, []);

  return (
    //Need to encapsulating all the content in the return fuction, for example with a fragment: <> ... </>
    <div className="container">
      <header>
        <h1>Attendance List</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar_url} alt="perfilPhoto" />
        </div>
      </header>

      <input
        type="text"
        placeholder="Wrtie a name..."
        onChange={e => setClientsName(e.target.value)}
      />

      <button type="button" onClick={handleAddClients}>
        Add
      </button>

      {clients.map(client => (
        <Card key={client.time} name={client.name} time={client.time} />
      ))}
    </div>
  );
}

//other way to export the fucntion to main.jsx:
// export default Home;
