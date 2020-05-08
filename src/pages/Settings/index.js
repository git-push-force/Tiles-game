import './_settings.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import HardModeControl from './components/hardModeControl';
import TilesFormControl from './components/tilesFormControl';

import { turnHardMode, setShape } from '../../redux/actions/settings';


const SettingsPage = ({ setSettings, settings }) => {
    const dispatch = useDispatch();

    const handleChange = () => dispatch(turnHardMode(!settings.hardMode));
    const changeShape = shape => dispatch(setShape(shape));

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
                setShape={changeShape}
            />
            
        </div>
    )
}

export default SettingsPage;