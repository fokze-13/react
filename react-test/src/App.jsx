import { useState } from 'react';
import './index.css';


function App () {
    const [users, setUser] = useState([]);
    const [input, setInput] = useState("");

    function addUser(name) {
        if (name === "") {
            return
        }

        setUser(
            users => [...users, name]
        )
    }

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={() => {addUser(input); setInput("")}}> Add user </button>
            <ul>
                {users.map((user, index) => (<li key={index}>{user}</li>))}
            </ul>
        </div>
    );
}


export default App;
