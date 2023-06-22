import React from 'react';

const Filter = ({ text, handler }) => {
    const filterStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '10px',
    };

    const labelStyle = {
        marginBottom: '5px',
    };

    const inputStyle = {
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: 'none',
        boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
    };

    return (
        <div style={filterStyle}>
            <label htmlFor="filter" style={labelStyle}>Filter:</label>
            <input id="filter" type="text" value={text} onChange={handler} style={inputStyle} />
        </div>
    );
};

export default Filter;
