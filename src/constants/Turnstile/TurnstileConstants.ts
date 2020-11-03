import { FETCHING_DATA_TURNSTILE_REQUEST, FETCHING_DATA_TURNSTILE_SUCCESS, FETCHING_DATA_TURNSTILE_FAILURE, TOGGLE_MODAL_TURNSTILE, TOGGLE_MODAL_TURNSTILE_MAIN_INFO } from './TurnstileVariables';

interface TurnstileRequest {
   type: typeof FETCHING_DATA_TURNSTILE_REQUEST
}
 
interface TurnstileSuccess {
   type: typeof FETCHING_DATA_TURNSTILE_SUCCESS,
   trigger: number,
   payload: any
}

interface TurnstileFailure {
   type: typeof FETCHING_DATA_TURNSTILE_FAILURE,
   payload: any
}

interface TurnstileTogglePopupSelectors {
   type: typeof TOGGLE_MODAL_TURNSTILE
}

interface TurnstileTogglePopupEquipment {
   type: typeof TOGGLE_MODAL_TURNSTILE_MAIN_INFO
}
 
export type TurnstileActions = TurnstileRequest | TurnstileSuccess | TurnstileFailure | TurnstileTogglePopupSelectors | TurnstileTogglePopupEquipment;
 