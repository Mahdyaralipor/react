export default function Mouse() {
    
    const enter = () => {
        console.log("mouse enter")
    }
    const leave = () =>{
        console.log("mouse leave")
    }
    return (
        <div>
            <h1 onMouseEnter={enter} onMouseLeave={leave}>Mouse</h1>
        </div>
    )
}