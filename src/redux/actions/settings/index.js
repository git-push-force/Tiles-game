import * as actionTypes from '../../types/settings';

export const turnHardMode = bool => {
    return { 
        type: actionTypes.TURN_HARD_MODE,
        payload: bool
    };
}

export const setShape = shape => {
    return {
        type: actionTypes.SET_TILES_SHAPE,
        payload: shape
    };
}