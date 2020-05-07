import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './pages/Main';
import SettingsPage from './pages/Settings'
import { handleClick, restart, getTiles } from './helpers';

const App = () => {
	
	const [settings, setSettings] = useState({ hardMode: false, shape: 'square' });
	const [tiles, setTiles] = useState(() => getTiles());
	const [active, setActive] = useState(false);
	const [founded, setFounded] = useState([]);
	const [pause, setPause] = useState(false);

	const restartWithArgs = () => restart(setTiles, setFounded, settings);
	const handleClickWithArgs = item => handleClick(item, founded, pause, setFounded, active, setActive, setPause);

	useEffect(() => {
		restartWithArgs();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [settings]);

	return (
		<Switch>
			<Route exact path='/'>
				<MainPage
					founded={founded}
					tiles={tiles}
					restart={restartWithArgs}
					handleClick={handleClickWithArgs}
					settings={settings}
				/>
			</Route>
			<Route path='/settings'>
				<SettingsPage
					setSettings={setSettings}
					settings={settings}
					restart={restartWithArgs}
					setTiles={setTiles}
				/>
			</Route>
		</Switch>
	)
}

export default App;
