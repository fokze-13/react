import { useState } from 'react';


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

    function deleteUser(name) {
        setUser(
            users => users.filter(user => user !== name)
        )
        // console.log(name)
        // console.log(users)
    }

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={() => {addUser(input); setInput("")}}> Add user </button>
            <ul>
                {users.map((user, index) => (<li key={index} onClick={() => (deleteUser(user))}>{user}</li>))}
            </ul>
        </div>
    );
}


export default App;
