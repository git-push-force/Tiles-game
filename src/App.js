import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainPage from './pages/Main';
import SettingsPage from './pages/Settings'
import { handleClick, restart, getTiles } from './helpers';
import { getScore, incScore } from './utils/localStorage';

const App = () => {
	
	const settings = useSelector(state => state.settings);
	const [pause, setPause] = useState(false);
	const [tiles, setTiles] = useState(() => getTiles());
	const [active, setActive] = useState(false);
	const [founded, setFounded] = useState([]);
	const [score, setScore] = useState(getScore());

	const restartWithArgs = () => restart(setTiles, setFounded, settings);
	const handleClickWithArgs = item => handleClick(item, founded, pause, setFounded, active, setActive, setPause);

	useEffect(() => {
		restartWithArgs();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [settings]);

	useEffect(() => {
		if (founded.length === tiles.length) {
			incScore();
			setScore(getScore());
		};

	}, [founded, tiles]);

	return (
		<Switch>
			<Route exact path='/'>
				<MainPage
					founded={founded}
					tiles={tiles}
					restart={restartWithArgs}
					handleClick={handleClickWithArgs}
					settings={settings}
					score={score}
				/>
			</Route>
			<Route path='/settings'>
				<SettingsPage
					settings={settings}
					restart={restartWithArgs}
					setTiles={setTiles}
				/>
			</Route>
		</Switch>
	)
}

export default App;
