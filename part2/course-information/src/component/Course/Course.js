import Header from "./Header/Header";
import {Content} from "./Content/Content";
import {Total} from "./Total/Total";

export const Course = ({course}) => {
    return (
        <div>
            <h1>Web Development Curriculum</h1>
            {course.map(c =>
                <div>
                    <Header course={c}/>
                    <Content course={c}/>
                    <Total course={c}/>
                </div>
            )}
        </div>

    )
}