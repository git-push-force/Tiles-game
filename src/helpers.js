export const getTiles = () => {
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

    return tiles.sort(() => Math.random() - 0.5);
}