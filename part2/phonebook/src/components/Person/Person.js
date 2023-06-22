import React from 'react';

const Person = ({ info, handleDelete }) => {
    const cardStyle = {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '400px',
    };

    const imageStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '10px',
    };

    const buttonStyle = {
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div style={cardStyle}>
            <img src="https://via.placeholder.com/50" alt="avatar" style={imageStyle} />
            <div>
                <p>{info.name}: {info.number}</p>
                <button style={buttonStyle} onClick={() => handleDelete(info.id)}>Delete</button>
            </div>
        </div>
    );
};

export default Person;
