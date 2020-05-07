import './_settings.scss';
import React from 'react';
import { Link } from 'react-router-dom';

import HardModeControl from './components/hardModeControl';
import TilesFormControl from './components/tilesFormControl';

const SettingsPage = ({ setSettings, settings }) => {

    const handleChange = () => setSettings(prev => ({ ...prev, hardMode: !prev.hardMode }));
    const setShape = shape => setSettings(prev => ({ ...prev, shape }));

    return (
        <div className='container settings_menu'>
            <h2>Settings</h2>
            <Link to='/'>
                <p className='settings_backButton'>‹ Back</p>
            </Link>

            <HardModeControl
                handleChange={handleChange}
                settings={settings}
            />

            <TilesFormControl 
                settings={settings}
                setShape={setShape}
            />
            
        </div>
    )
}

export default SettingsPage;