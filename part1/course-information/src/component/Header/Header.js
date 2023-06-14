const Header = (props)=>{
    console.log("Values passed into Header are", props)
    return (
        <h1>{props.course}</h1>
    )
}

export default Header