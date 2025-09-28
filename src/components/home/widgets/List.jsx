export default function List () {
    let colors = [
        "red",
        "blue",
        "black"
    ]

    colors = colors.map((item) => <h3>{item}</h3>)
    return (
        <div>
            {colors}
        </div>
    )
}