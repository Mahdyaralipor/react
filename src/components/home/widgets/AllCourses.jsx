import { CourseList } from "./CourseList"
import {CourseBox} from "./CourseBox"
import { useState } from "react"

export default function AllCourses() {
    const [loading, setLoading] = useState(false)
    const [courses, setCourses] = useState([
        {
            title: "Php Courses",
            description: "Php ..."
        },
        {
            title: "React Courses",
            description: "React ..."
        }
    ])
    
    const loadMore = () => {
        setLoading(true)
        setTimeout(() => {
            setCourses(
                [
                    ...courses,
                    {
                        title: "Vue Course",
                        description: "Vue ..."
                    },
                    {
                        title: "javaScript Course",
                        description: "javaScript"
                    }
                ]
            )
            setLoading(false)
    }, 3000)
    }

    return (
        <div>
            {courses.map(
                (course, index) =>
                  <CourseBox key={index} title={course.title} description={course.description}/>    
            )}

            {
                loading ? <span>loading ...</span> : <button onClick={loadMore}>Load More</button>
            }
        </div>
    )
}