import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleAdd = () => {
    setData([...data, { name, age }]);
    setName('');
    setAge('');
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} anos
            <button onClick={() => handleDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
      <h2>Novo usuário</h2>
      <label>Nome:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Idade:</label>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <br />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;