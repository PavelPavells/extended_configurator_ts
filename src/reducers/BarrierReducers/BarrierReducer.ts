import {
    FETCHING_DATA_BARRIER_REQUEST,
    FETCHING_DATA_BARRIER_SUCCESS,
    FETCHING_DATA_BARRIER_FAILURE,
    TOGGLE_MODAL_BARRIER,
    TOGGLE_MODAL_BARRIER_MAIN_INFO
} from '../../constants/Barrier/BarrierVariables';
import { BarrierState } from '../../constants/Barrier/BarrierReducer';
import { BarrierActions } from '../../constants/Barrier/BarrierConstants';

const initialState: BarrierState = {
    isFetching: false,
    errorMessage: '',
    modal: false,
    info: false,
    data: [],
    trigger: 0
};

export default function BarrierReducer(state = initialState, action: BarrierActions): BarrierState {
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