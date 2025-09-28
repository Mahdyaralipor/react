export function CourseBox({title, details = "default message"}) {
    
    return(
        <div>
            <h2>{title}</h2>
            <p>{details}</p>
        </div>
    )
}