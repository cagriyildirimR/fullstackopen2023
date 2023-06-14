const Header = (props)=>{
    console.log("Values passed into Header are", props)
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

export default Header