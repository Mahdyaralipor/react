export function CourseBox(props) {
    console.log(props)
    return(
        <div>
            <h2>{props?.course?.title}</h2>
            <p>{props?.course?.details}</p>
            <span>{props?.course?.time}</span>
        </div>
    )
}