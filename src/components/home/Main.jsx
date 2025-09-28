import { CourseBox } from "./CourseBox"

export function Main () {
    return (
        <>
            <h1>Main</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum illo, cumque inventore accusamus odit dicta esse vero ea suscipit facilis qui, quas, maxime quod voluptatum necessitatibus unde voluptatibus. Qui.</p>
            <CourseBox title="Course One" details="React ..." time="2"/>
            <CourseBox title="Vue Course" details="Vue ..." time="4"/>
            <CourseBox title="React Course" details="React ..." time="5"/>

        </>
    )
}