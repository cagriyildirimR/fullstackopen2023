import React, { useState, useEffect } from 'react';

export const Notification = ({ message, color }) => {
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
        top:'10%',
        left: '50%',
        background:color,
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