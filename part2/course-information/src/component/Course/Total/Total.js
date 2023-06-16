export const Total = ({course}) => {
    console.log("Values passed into Total are", course)
    let parts = course.parts
    let total = 0
    parts.forEach( v => total += v.exercises)
    return (
        <p> Number of exercises {total} </p>
    )
}