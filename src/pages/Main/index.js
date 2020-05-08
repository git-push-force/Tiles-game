import './_main.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = ({ founded, tiles, restart, handleClick, settings, score }) => {
    return (
    <>
    {founded.length === tiles.length &&
    <span>
        <p className='restart' onClick={restart}>Restart</p>
    </span>
    }
    <p className='scoreCounter'>Wins: {score}</p>
    <div className='container'>
        <Link to='/settings'>
            <p>To settings ›</p>
        </Link>
        {tiles.map(item => {
            return (
                <div
                    className='tile'
                    key={item.id} 
                    onClick={() => handleClick(item)}
                    style={{
                        backgroundColor: founded.find(el => el === item.id) ? item.color : 'lightgray',
                        borderRadius: settings.shape === 'square' ? '8px' : '50%'
                    }}
                />			
            )
        })}
    </div>
    </>
    )
}

export default MainPage;