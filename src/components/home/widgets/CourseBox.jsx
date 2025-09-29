export function CourseBox({title, description = "default message"}) {
    
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}