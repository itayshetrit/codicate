import * as actionTypes from './actionTypes';
import beersApi from '../../api/beers-api';

export const beersActionStart = (action) => {
    return {
        type: action
    };
};
export const beersActionSuccess = (action, beers) => {
    return {
        type: action,
        beers
    };
};
export const beersActionFail = (action, error) => {
    return {
        type: action,
        error
    };
};

export const getBeers = (foodFilter, rangeFilter, page) => {
    return async (dispatch) => {
        dispatch(beersActionStart(actionTypes.GET_BEERS_START))
        const { data, status, error } = await beersApi.getBeers(foodFilter, rangeFilter, page)
        if (status === 200) {
            return dispatch(beersActionSuccess(actionTypes.GET_BEERS_SUCCESS, data));
        } else {
            return dispatch(beersActionFail(actionTypes.GET_BEERS_FAIL, error));
        }
    }
}


export const cleanBeers = () => {
    return {
        type: actionTypes.CLEAN_BEERS
    }
}