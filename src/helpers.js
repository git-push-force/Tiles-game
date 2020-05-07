export const getTiles = (hard) => {
    const tiles = [
        { id: 1, color: '#432371' },
        { id: 2, color: '#432371' },
        { id: 3, color: '#2A9D8F' },
        { id: 4, color: '#2A9D8F' },
        { id: 5, color: '#E9C46A' },
        { id: 6, color: '#E9C46A' },
        { id: 7, color: '#8ac926' },
        { id: 8, color: '#8ac926' },
        { id: 9, color: '#E76F51' },
        { id: 10, color: '#E76F51' },
        { id: 11, color: '#FFCDB2' },
        { id: 12, color: '#FFCDB2' },
        { id: 13, color: '#d8bbff' },
        { id: 14, color: '#d8bbff' },
        { id: 15, color: '#f72585' },
        { id: 16, color: '#f72585' },
    ];

    const tilesHardMode = [
        { id: 1, color: '#641220' },
        { id: 2, color: '#641220' },
        { id: 3, color: '#6e1423' },
        { id: 4, color: '#6e1423' },
        { id: 5, color: '#a11d33' },
        { id: 6, color: '#a11d33' },
        { id: 7, color: '#b21e35' },
        { id: 8, color: '#b21e35' },
        { id: 9, color: '#bd1f36' },
        { id: 10, color: '#bd1f36' },
        { id: 11, color: '#c71f37' },
        { id: 12, color: '#c71f37' },
        { id: 13, color: '#da1e37' },
        { id: 14, color: '#da1e37' },
        { id: 15, color: '#e01e37' },
        { id: 16, color: '#e01e37' }
    ];

    return hard ? (
        tilesHardMode.sort(() => Math.random() - 0.5)
    ) : (
        tiles.sort(() => Math.random() - 0.5)
    )
}

export const handleClick = (item, founded, pause, setFounded, active, setActive, setPause) => {
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

export const restart = (setTiles, setFounded, settings) => {
    setTiles(getTiles(settings.hardMode));
    setFounded([]);
};