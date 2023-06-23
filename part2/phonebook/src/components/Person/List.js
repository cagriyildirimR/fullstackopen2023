import React from "react";
import Person from "./Person";

export const List = ({people, filter, handleDelete}) => {
    return (
        <div>
            {people
                .filter(obj => obj.name.toLowerCase().includes(filter.toLowerCase())).reverse()
                .map(p => (
                    <Person key={p.id} info={p} handleDelete={handleDelete} />
                ))}
        </div>
    )
}