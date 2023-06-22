import React from 'react';

const PhonebookForm = ({ contactName, handleContactNameChange, contactNumber, handleContactNumberChange, handleAddContact }) => {
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '10px',
    };

    const inputStyle = {
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: 'none',
        boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <form style={formStyle} onSubmit={handleAddContact}>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" value={contactName} onChange={handleContactNameChange} style={inputStyle} />
            <label htmlFor="number">Number:</label>
            <input id="number" type="text" value={contactNumber} onChange={handleContactNumberChange} style={inputStyle} />
            <button type="submit" style={buttonStyle}>Add</button>
        </form>
    );
};

export default PhonebookForm;
