import React from 'react';

const Control = ({ handleChange, settings }) => {
    return (
        <label className='wrapper'>Turn on HARD MODE
            <input 
                type='checkbox' 
                onChange={handleChange}
                checked={settings.hardMode}
            />
            <span className='checkmark'></span>
        </label>
    );
}

export default Control;