import { useState } from "react"

export default function Button() {
    const [message, setMessage] = useState("data not loaded")
    
    const Click = () => {
        setMessage("data loaded")
    }

    console.log(message)
    return (
        <button onClick={Click}>Click Me!</button>
    )
}