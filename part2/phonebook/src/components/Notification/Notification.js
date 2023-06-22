import React, { useState, useEffect } from 'react';

export const Notification = ({ message }) => {
    console.log(`Notification message is ${message}`)
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        console.log(`Notification message is changed`)
        if (message) {
            setShowNotification(true);
            setTimeout(() => {
                setShowNotification(false);
            }, 3000);
        }
    }, [message]);
    const notificationStyle = {
        position: 'fixed',
        left: '50%',
        background:"#418812",
        transform: 'translate(-50%, -50%)',
        color: 'white',
        padding: '15px',
        borderRadius: '5px',
        display: showNotification ? 'block' : 'none',
    };
    return (
        <div style={notificationStyle}>{message}</div>
    );
};