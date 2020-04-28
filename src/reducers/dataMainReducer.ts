/**
 * Импорт глобальных переменных
 */
import {
    MainState,
    MainActions,
    FETCHING_DATA_MAIN_REQUEST,
    FETCHING_DATA_MAIN_SUCCESS,
    FETCHING_DATA_MAIN_FAILURE
} from '../constants/constants';

const initialState: MainState = {
    isFetching: false,
    errorMessage: '',
    data: []
};

/**
 * Редьюсер Компонента Main
 */

export default function (state = initialState, action: MainActions): MainState {
    switch (action.type) {
        case FETCHING_DATA_MAIN_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCHING_DATA_MAIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case FETCHING_DATA_MAIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        default: return state;
    }
}
