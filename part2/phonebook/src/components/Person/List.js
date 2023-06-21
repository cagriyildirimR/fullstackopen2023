import {Person} from "./Person";
import React from "react";

export const List = ({people, filter, handleDelete}) => {
    return (
        <div>
            {people
                .filter(obj => obj.name.toLowerCase().includes(filter.toLowerCase()))
                .map(p => (
                    <Person key={p.id} info={p} handleDelete={handleDelete} />
                ))}
        </div>
    )
}