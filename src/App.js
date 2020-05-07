import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './pages/Main';
import SettingsPage from './pages/Settings'
import { handleClick, restart, getTiles } from './helpers';

const App = () => {

	const [settings, setSettings] = useState({ hardMode: false });
	const [tiles, setTiles] = useState(() => getTiles());
	const [active, setActive] = useState(false);
	const [founded, setFounded] = useState([]);
	const [pause, setPause] = useState(false);

	const restartWithArgs = () => restart(setTiles, setFounded);
	const handleClickWithArgs = item => handleClick(item, founded, pause, setFounded, active, setActive, setPause);
	
	useEffect(() => {
		setTiles(getTiles(settings.hardMode));
	}, [settings]);

	return (
		<Switch>
			<Route exact path='/'>
				<MainPage
					founded={founded}
					tiles={tiles}
					restart={restartWithArgs}
					handleClick={handleClickWithArgs}
				/>
			</Route>
			<Route path='/settings'>
				<SettingsPage
					setSettings={setSettings}
					settings={settings}
					restart={restartWithArgs}
				/>
			</Route>
		</Switch>
	)
}

export default App;
