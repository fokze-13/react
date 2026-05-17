import './index.css';
import {useState} from "react";


function Button ({value, onClick}: {value: string, onClick: () => void}) {
    return (
        <button onClick={onClick}>{value}</button>
    )
}

function InputField ({value, onChange, onEnter}: {value: string, onChange: (v: string) => void, onEnter: () => void}) {
    return (
        <input
            placeholder={"Type expression"}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" && onEnter())}
        />
    )
}

function App () {
    const [input, setInput] = useState("");
    const chars: string = "1234567890+-*/";

    return (
        <div className={"main-box"}>
            <h1>Calculator</h1>
            <InputField value={input}
                        onChange={setInput}
                        onEnter={() => (setInput(eval(input)))}
            />
            <br/>
            <div className={"char-grid"}>
                {
                   chars.split('').map(digit => <Button
                       value={digit.toString()}
                       onClick={() => (setInput(input + digit.toString()))}
                   />)
                }
                <Button value={"="} onClick={() => (setInput(eval(input)))}/>
            </div>
        </div>
    )
}

export default App;
