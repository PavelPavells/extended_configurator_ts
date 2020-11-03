import { FETCHING_DATA_MAIN_REQUEST, FETCHING_DATA_MAIN_SUCCESS, FETCHING_DATA_MAIN_FAILURE } from './MainVariables';

interface MainRequest {
    type: typeof FETCHING_DATA_MAIN_REQUEST
 }
 
 interface MainSuccess {
    type: typeof FETCHING_DATA_MAIN_SUCCESS,
    payload: any;
 }
 
 interface MainFailure {
    type: typeof FETCHING_DATA_MAIN_FAILURE,
    payload: any
 }
 
 export type MainActions = MainRequest | MainSuccess | MainFailure;