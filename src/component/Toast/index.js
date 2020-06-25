import React from 'react';

import './toast.css'

const Toast = (props) => {
    const { message, handleClick } = props
    return (
        <div className="notification-container center" style={{ backgroundColor: "#f0ad4e" }}>
            <div className="notification toast center">
                <span onClick={handleClick} className="text-container close" >x</span>
                <div className="notification-image">
                    <img src="" alt="" />
                </div>
                <div>
                    <p className="notification-message text-container" >{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Toast