import React from "react";

export const Filter = ({text, handler}) => {
    return(
        <div>
            <h3>Filter:</h3>
            <input value={text} onChange={handler}/>
        </div>

    )
}