import Header from "./Header/Header";
import {Content} from "./Content/Content";
import {Total} from "./Total/Total";

export const Course = ({course}) => {
    return (
        <>
            <Header course={course} />
            <Content course={course} />
            <Total course={course}/>
        </>
    )
}