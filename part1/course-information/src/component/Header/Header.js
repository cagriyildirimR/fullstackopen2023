const Header = ({course})=>{
    console.log("Values passed into Header are", course)
    return (
        <h1>{course.name}</h1>
    )
}

export default Header