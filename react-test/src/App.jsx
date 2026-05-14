import {useState} from "react"


function App () {
    const [count, setCount] = useState(0);

    function increment () {
        setCount(count + 1);
    }

    return (
        <div>
            <p>HelloWorld!</p>
            <button onClick={increment} className="box-flex flex-lg-fill">{count}</button>
        </div>
    )
}

export default App
