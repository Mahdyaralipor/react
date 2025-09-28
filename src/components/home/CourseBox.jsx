export function CourseBox(props) {
    console.log(props)
    return(
        <div>
            <h2>{props?.title}</h2>
            <p>{props?.details}</p>
            <span>{props?.time}</span>
        </div>
    )
}