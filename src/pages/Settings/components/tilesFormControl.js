import React from 'react';

const Control = ({ settings, setShape }) => {
    return (
        <div className='settings_shapes'>
            <p className='settings_shapesTitle'>Choose the shape of the tiles: </p>
            <p 
                className={`shape square ${settings.shape === 'square' ? 'activeShape' : null}`}
                onClick={() => setShape('square')}
            >
                ▢
            </p>
            <p 
                className={`shape circle ${settings.shape === 'circle' ? 'activeShape' : null}`}
                onClick={() => setShape('circle')}
            >
                ◯
            </p>
        </div>
    )
}

export default Control;