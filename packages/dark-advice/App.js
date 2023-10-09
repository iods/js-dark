
import { useEffect, useState } from "react";


function App() {

    const [advice, setAdvice] = useState("");
    const [count, setCount] = useState(0);

    // function for the API request
    async function getAdvice() {
        // it first fetches the data
        const response = await fetch('https://api.adviceslip.com/advice');
        // store the response into json
        const data = await response.json();
        console.log(data.slip.advice);
        // update the state, when updated the entire component is executed again
        setAdvice(data.slip.advice);
        setCount((c) => c + 1);
    }

    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <div>
            <h1>Hello React World!</h1>
            <p>{advice}</p>
            <button onClick={getAdvice}>Get Advice</button>
            <Message count={count}/>
        </div>
    );
}

function Message(props) {
    return (
        <p>You have read <strong>{props.count}</strong> pieces of advice.</p>
    );
}

export default App;