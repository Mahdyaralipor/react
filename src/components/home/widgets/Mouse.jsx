export default function Mouse() {
    const handleStyle = {
        backgroundColor : 'red'
    }
    const enter = () => {
        console.log("mouse enter")
    }
    const leave = () =>{
        console.log("mouse leave")
    }
    return (
        <div>
            <h1 style={handleStyle} onMouseEnter={enter} onMouseLeave={leave}>Mouse</h1>
        </div>
    )
}