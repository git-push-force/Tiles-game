import React, { useState, useEffect } from 'react';
import { getTiles } from './helpers';
import { Switch, Route } from 'react-router-dom';

import MainPage from './pages/Main';
import SettingsPage from './pages/Settings'

const App = () => {

	const [settings, setSettings] = useState({ hardMode: false });
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

	useEffect(() => {
		setTiles(getTiles(settings.hardMode));
	}, [settings]);

	return (
		<Switch>
			<Route exact path='/'>
				<MainPage
					founded={founded}
					tiles={tiles}
					restart={restart}
					handleClick={handleClick}
				/>
			</Route>
			<Route path='/settings'>
				<SettingsPage
					setSettings={setSettings}
					settings={settings}
				/>
			</Route>
		</Switch>
	)
}

export default App;
