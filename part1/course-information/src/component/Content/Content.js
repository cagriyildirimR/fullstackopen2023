const Part = (props) => {
    console.log("Values passed into Part are", props)

    return (
        <p> {props.part} {props.exercise} </p>
    )
}

export const Content = (props) => {
    console.log("Values passed into Content are", props)

    return (
        props.parts.map((part, index) => (
            <Part part={part} exercise={props.exercises[index]} />
        ))
    )
}