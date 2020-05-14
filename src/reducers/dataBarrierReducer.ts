/**
 * Импорт глобальных переменных
 */
import {
    BarrierActions,
    BarrierState,
    FETCHING_DATA_BARRIER_REQUEST,
    FETCHING_DATA_BARRIER_SUCCESS,
    FETCHING_DATA_BARRIER_FAILURE,
    TOGGLE_MODAL_BARRIER,
    TOGGLE_MODAL_BARRIER_MAIN_INFO
} from '../constants/constants';

const initialState: BarrierState = {
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
export default function (state = initialState, action: BarrierActions): BarrierState {
    switch(action.type) {
        case FETCHING_DATA_BARRIER_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case FETCHING_DATA_BARRIER_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            };
        case FETCHING_DATA_BARRIER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                trigger: action.trigger
            };
        case TOGGLE_MODAL_BARRIER:
            return {
                ...state,
                isFetching: false,
                modal: !state.modal
            };
        case TOGGLE_MODAL_BARRIER_MAIN_INFO:
            return {
                ...state,
                isFetching: false,
                info: !state.info
            };
        default: return state;
    }
}