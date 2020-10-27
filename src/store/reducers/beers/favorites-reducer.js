import * as actionTypes from '../../actions/beers/actionTypes';
import { updateObject } from '../../utilities';

const initialState = {
    favorites: [],
    total: 100, // const
    loading: false,
    error: null
};

const updateFavoritesSuccess = (state, action) => {
    return updateObject(state, {
        favorites: action.favorites,
        loading: false,
        error: null,
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_FAVORITES_SUCCESS: return updateFavoritesSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;