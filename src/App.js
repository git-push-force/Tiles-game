import React, { useState } from 'react';
import { getTiles } from './helpers';

const App = () => {

	const [tiles, setTiles] = useState(() => getTiles());
	const [active, setActive] = useState(false);
	const [founded, setFounded] = useState([]);
	const [pause, setPause] = useState(false);

	const restart = () => {
		setTiles(getTiles());
		setFounded([])
	};
	const handleClick = (item) => {
		if (founded.find(el => el === item.id) || pause) return;

		setFounded(() => [...founded, item.id]);

		if (!active) return setActive(item);

		setPause(true);

		if (active.color !== item.color) {
			setTimeout(() => {
				setFounded(founded.filter(el => el !== active.id && active.id !== item.id));
				setActive(false);
				setPause(false);
			}, 500);
		} else {
			setPause(false);
		}

		return setActive(false);
	}

	return (
		<>
		{founded.length === tiles.length &&
		<span>
			<p className='restart' onClick={restart}>Restart</p>
		</span>
		}
		<div className='container'>
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

export default App;
