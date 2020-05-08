import * as actionTypes from '../../types/settings';

const initState = {
    hardMode: false, 
    shape: 'square'
}

const reducer = (state = initState, action) => {
    switch (
        action.type
    ) {
        case actionTypes.SET_TILES_SHAPE: {
            return {
                ...state,
                shape: action.payload
            }
        }

        case actionTypes.TURN_HARD_MODE: {
            return {
                ...state,
                hardMode: action.payload
            }
        }

        default: return state;
    }
}

export default reducer;