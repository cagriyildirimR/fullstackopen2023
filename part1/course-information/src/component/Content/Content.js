export const Content = (props) => {
    console.log("Values passed into Content are", props)

    return (
        <div>
            <p>{props.part} {props.exercise}</p>
        </div>
    )
}