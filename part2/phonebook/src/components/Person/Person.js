export const Person = ({info, handleDelete}) => {
    return (
        <div>
            <p>{info.name}: {info.number}</p>
            <button onClick={() => handleDelete(info.id)}>Delete</button>
        </div>
    )
}