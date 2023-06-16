export const PhonebookForm = ({ newName, handleNewName, number, handleNumber, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={newName} onChange={handleNewName} />
            </div>
            <div>
                number: <input value={number} onChange={handleNumber} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};
