/**
 * Импорт глобальных переменных
 */
import {
    FETCHING_DATA_TURNSTILE_REQUEST,
    FETCHING_DATA_TURNSTILE_SUCCESS,
    FETCHING_DATA_TURNSTILE_FAILURE,
    TOGGLE_MODAL_TURNSTILE,
    TOGGLE_MODAL_TURNSTILE_MAIN_INFO
} from '../constants/constants';

const initialState = {
    isFetching: false,
    errorMessage: '',
    modal: false,
    info: false,
    data: [],
    trigger: 0
};

/**
 * Редьюсер Компонента Турникеты
 */

 // @ts-ignore
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCHING_DATA_TURNSTILE_REQUEST:
            return {
                ...state,
                isFetching: true,
                trigger: action.trigger
            };
        case FETCHING_DATA_TURNSTILE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
                trigger: action.trigger
            };
        case FETCHING_DATA_TURNSTILE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                trigger: action.trigger
            };
        case TOGGLE_MODAL_TURNSTILE:
            return {
                ...state,
                isFetching: false,
                modal: !state.modal
            };
        case TOGGLE_MODAL_TURNSTILE_MAIN_INFO:
            return {
                ...state,
                isFetching: false,
                info: !state.info
            };
        default: return state;
    }
}
