/**
 * Импорт глобальных переменных
 */
import {
    FETCHING_DATA_POPUP_TURNSTILE_REQUEST,
    FETCHING_DATA_POPUP_TURNSTILE_SUCCESS,
    FETCHING_DATA_POPUP_TURNSTILE_FAILURE,
} from '../../constants/Popup/popup-turnstile/PopupVariables';

/**
 * Импорт интерфейсов
 */
import { TurnstilePopupState } from '../../constants/Popup/popup-turnstile/PopupReducer';
import { TurnstilePopupActions } from '../../constants/Popup/popup-turnstile/PopupConstants';

const initialState: TurnstilePopupState = {
    isFetching: false,
    errorMessage: '',
    modal: false,
    info: false,
    data: []
}

/**
 * Редьюсер Компонента Popup(Турникеты)
 */
export default function PopupReducer(state = initialState, action: TurnstilePopupActions): TurnstilePopupState {
    switch(action.type) {
        case FETCHING_DATA_POPUP_TURNSTILE_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case FETCHING_DATA_POPUP_TURNSTILE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case FETCHING_DATA_POPUP_TURNSTILE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            };
        default: return state;
    }
}