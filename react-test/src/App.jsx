import { useState } from 'react';
import './index.css';

function App() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");

  function addUser() {
    if (input.trim() === "") return;
    setUsers(users => [...users, input.trim()]);
    setInput("");
  }

  function deleteUser(index) {
    setUsers(users => users.filter((_, i) => i !== index));
  }

  return (
    <div className="bg">
      <div className="card">
        <h2 className="card-title">Список пользователей</h2>

        <div className="input-row">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addUser()}
            placeholder="Введите имя..."
          />
          <button className="add-btn" onClick={addUser}>
            + Добавить
          </button>
        </div>

        {users.length === 0 ? (
          <p className="empty">Список пуст — добавьте первого пользователя</p>
        ) : (
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                <span>{user}</span>
                <button className="del-btn" onClick={() => deleteUser(index)}>✕</button>
              </li>
            ))}
          </ul>
        )}

        {users.length > 0 && (
          <p className="count">Пользователей: {users.length}</p>
        )}
      </div>
    </div>
  );
}

export default App;