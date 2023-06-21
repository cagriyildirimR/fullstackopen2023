export const PhonebookForm = ({ contactName, handleContactNameChange, contactNumber, handleContactNumberChange, handleAddContact }) => {
    return (
        <form onSubmit={handleAddContact}>
            name: <input value={contactName} onChange={handleContactNameChange} />
            number: <input value={contactNumber} onChange={handleContactNumberChange} />
            <button type="submit">Add</button>
        </form>
    );
};
