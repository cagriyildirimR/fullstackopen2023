export const Total = (props) => {
    console.log("Values passed into Total are", props)
    return (
        <p>Number of exercises {props.total} </p>
    )
}