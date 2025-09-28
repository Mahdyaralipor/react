import { useState } from "react";

export default function Counter () {
    const [count, setCount] = useState(0);

    const counter = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={counter}>click me!</button>
        </div>
    )
}