import './_settings.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const SettingsPage = ({ setSettings, settings, restart }) => {

    const handleChange = () => {
        setSettings(prev => ({ ...prev, hardMode: !prev.hardMode }));
        restart();
    }

    return (
        <div className='container settings_menu'>
            <h2>Settings</h2>
            <Link to='/'>
                <p className='settings_backButton'>‹ Back</p>
            </Link>

            <label class='wrapper'>Turn on HARD MODE
                <input 
                    type='checkbox' 
                    onChange={handleChange}
                    checked={settings.hardMode}
                />
                <span class='checkmark'></span>
            </label>
        </div>
    )
}

export default SettingsPage;