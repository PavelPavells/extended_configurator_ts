import { FETCHING_DATA_POPUP_TURNSTILE_REQUEST, FETCHING_DATA_POPUP_TURNSTILE_SUCCESS, FETCHING_DATA_POPUP_TURNSTILE_FAILURE } from './PopupVariables';

interface TurnstilePopupRequest {
   type: typeof FETCHING_DATA_POPUP_TURNSTILE_REQUEST;
}
 
 interface TurnstilePopupSuccess {
    type: typeof FETCHING_DATA_POPUP_TURNSTILE_SUCCESS;
    trigger: number;
    payload: any;
 }
 
 interface TurnstilePopupFailure {
    type: typeof FETCHING_DATA_POPUP_TURNSTILE_FAILURE;
    payload: any;
 }
 
 export type TurnstilePopupActions = TurnstilePopupRequest | TurnstilePopupSuccess | TurnstilePopupFailure;
 