import * as actionTypes from './actionTypes';

export const favoritesActionSuccess = (action, favorites) => {
    return {
        type: action,
        favorites
    };
};

export const updateFavorites = (favorites) => {
    return async (dispatch) => {
        return dispatch(favoritesActionSuccess(actionTypes.UPDATE_FAVORITES_SUCCESS, favorites));
    }
}