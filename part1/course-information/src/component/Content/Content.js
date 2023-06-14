const Part = (props) => {
    console.log("Values passed into Part are", props)

    return (
        <p> {props.part} {props.exercise} </p>
    )
}

export const Content = ({parts} ) => {
    console.log("Values passed into Content are", parts);

    return (
        <div>
            {parts.map((part, index) => (
                <Part key={index} part={part.name} exercise={part.exercises} />
            ))}
        </div>
    );
};
