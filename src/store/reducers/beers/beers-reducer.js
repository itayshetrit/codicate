import * as actionTypes from '../../actions/beers/actionTypes';
import { updateObject } from '../../utilities';

const initialState = {
    beers: [],
    total: 100, // const
    loading: false,
    error: null
};

const getBeersStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}

const getBeersSuccess = (state, action) => {
    return updateObject(state, {
        beers: action.beers,
        loading: false,
        error: null,
    })
}

const getBeersFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}

export const cleanBeers = (state, action) => {
    return updateObject(state, {
        ...initialState
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_BEERS_START: return getBeersStart(state, action);
        case actionTypes.GET_BEERS_SUCCESS: return getBeersSuccess(state, action);
        case actionTypes.GET_BEERS_FAIL: return getBeersFail(state, action);
        case actionTypes.CLEAN_BEERS: return cleanBeers(state, action);
        default:
            return state;
    }
};

export default reducer;