import { FETCHING_DATA_BARRIER_REQUEST, FETCHING_DATA_BARRIER_SUCCESS, FETCHING_DATA_BARRIER_FAILURE, TOGGLE_MODAL_BARRIER, TOGGLE_MODAL_BARRIER_MAIN_INFO } from './BarrierVariables';

interface BarrierRequest {
    type: typeof FETCHING_DATA_BARRIER_REQUEST;
}

interface BarrierSuccess {
    type: typeof FETCHING_DATA_BARRIER_SUCCESS;
    trigger: number;
    payload: any;
}

interface BarrierFailure {
    type: typeof FETCHING_DATA_BARRIER_FAILURE;
    payload: any;
}

interface BarrierTogglePopupSelectors {
    type: typeof TOGGLE_MODAL_BARRIER;
}

interface BarrierTogglePopupEquipment {
    type: typeof TOGGLE_MODAL_BARRIER_MAIN_INFO;
}

export type BarrierActions = BarrierRequest | BarrierSuccess | BarrierFailure | BarrierTogglePopupSelectors | BarrierTogglePopupEquipment;
