import './_main.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = ({ founded, tiles, restart, handleClick }) => {
    return (
    <>
    {founded.length === tiles.length &&
    <span>
        <p className='restart' onClick={restart}>Restart</p>
    </span>
    }
    <div className='container'>
        <Link to='/settings'>
            <p>To settings ›</p>
        </Link>
        {tiles.map(item => {
            return (
                <div
                    className='tile hidden'
                    key={item.id} 
                    onClick={() => handleClick(item)}
                    style={{
                        backgroundColor: founded.find(el => el === item.id) ? item.color : 'lightgray',
                    }}
                />			
            )
        })}
    </div>
    </>
    )
}

export default MainPage;