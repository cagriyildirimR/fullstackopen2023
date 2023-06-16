const Part = (props) => {
    console.log("Values passed into Part are", props)

    return (
        <p> {props.part} {props.exercise} </p>
    )
}

export const Content = ({course} ) => {
    console.log("Values passed into Content are", course);
    let parts = course.parts
    return (
        <div>
            {parts.map((part, index) => (
                <Part key={index} part={part.name} exercise={part.exercises} />
            ))}
        </div>
    );
};
