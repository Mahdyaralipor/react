import { CourseBox } from "./CourseBox"
import { CourseList } from "./CourseList"

export function Main () {
    // let courseOne =  {
    //     title: "CourseOne",
    //     details: "React ...",
    //     time: 1
    // }
    return (
        <>
            <h1>Main</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum illo, cumque inventore accusamus odit dicta esse vero ea suscipit facilis qui, quas, maxime quod voluptatum necessitatibus unde voluptatibus. Qui.</p>
            {/* <CourseBox course={courseOne}/> */}
            <CourseList>
                <CourseBox title="React ..." />
                <CourseBox title="Vue ..." />

            </CourseList>
            <CourseList>
                <CourseBox title="Laravel ..." />
            </CourseList>
            
        </>
    )
}