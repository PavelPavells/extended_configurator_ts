/**
 * Глобальные настройки для продакш сервера
 */
//const site = "https://embedded.carddex.konstructor.online/api/dw";
const site = "https://embedded.carddex.master-conf.online/api/dw";
//const site = "http://172.16.3.81:9999/api/dw";
//const site = "http://10.7.1.35:9999/dw";
export default site;

/**
 * Глобальные переменные для запросов данных в Main Компонента
 */
export const FETCHING_DATA_MAIN_REQUEST = 'FETCHING_DATA_MAIN_REQUEST';
export const FETCHING_DATA_MAIN_SUCCESS = 'FETCHING_DATA_MAIN_SUCCESS';
export const FETCHING_DATA_MAIN_FAILURE = 'FETCHING_DATA_MAIN_FAILURE';

/**
 * Глобальные переменные для запросов данных в Компоненте Turnstile
 */
export const FETCHING_DATA_TURNSTILE_REQUEST = 'FETCHING_DATA_TURNSTILE_REQUEST';
export const FETCHING_DATA_TURNSTILE_SUCCESS = 'FETCHING_DATA_TURNSTILE_SUCCESS';
export const FETCHING_DATA_TURNSTILE_FAILURE = 'FETCHING_DATA_TURNSTILE_FAILURE';

/**
 * Глобальные переменные для запросов данных в Компоненте Barrier
 */
export const FETCHING_DATA_BARRIER_REQUEST = 'FETCHING_DATA_BARRIER_REQUEST';
export const FETCHING_DATA_BARRIER_SUCCESS = 'FETCHING_DATA_BARRIER_SUCCESS';
export const FETCHING_DATA_BARRIER_FAILURE = 'FETCHING_DATA_BARRIER_FAILURE';

/**
 * Открыть/Закрыть модальное окно Компонента Turnstile
 */
export const TOGGLE_MODAL_TURNSTILE = 'TOGGLE_MODAL_TURNSTILE';
export const TOGGLE_MODAL_TURNSTILE_MAIN_INFO = 'TOGGLE_MODAL_TURNSTILE_MAIN_INFO';

/**
 * Открыть/Закрыть модальное окно Компонента Barrier
 */
export const TOGGLE_MODAL_BARRIER = 'TOGGLE_MODAL_BARRIER';
export const TOGGLE_MODAL_BARRIER_MAIN_INFO = 'TOGGLE_MODAL_BARRIER_MAIN_INFO';

/**
 * *********************** Интерфейсы стейта Компонента Main ***********************
 */

export interface MainState {
   isFetching: boolean,
   errorMessage: string,
   data: any
}

interface MainRequest {
   type: typeof FETCHING_DATA_MAIN_REQUEST
}

interface MainSuccess {
   type: typeof FETCHING_DATA_MAIN_SUCCESS,
   payload: MainState[]
}

interface MainFailure {
   type: typeof FETCHING_DATA_MAIN_FAILURE,
   payload: any
}

export type MainActions = MainRequest | MainSuccess | MainFailure;

/**
 * *********************** Интерфейсы стейта Компонента Турникеты ***********************
 */

export interface TurnstileState {
   isFetching: boolean,
   errorMessage: string,
   modal: boolean,
   info: boolean
   data: any,
   trigger: number
}

interface TurnstileRequest {
   type: typeof FETCHING_DATA_TURNSTILE_REQUEST
}

interface TurnstileSuccess {
   type: typeof FETCHING_DATA_TURNSTILE_SUCCESS,
   trigger: number,
   payload: TurnstileState[]
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

 /**
 * *********************** Интерфейсы стейта Компонента Шлагбаумы ***********************
 */

export interface BarrierState {
   isFetching: boolean,
   errorMessage: string,
   modal: boolean,
   info: boolean,
   data: any,
   trigger: number
}

interface BarrierRequest {
   type: typeof FETCHING_DATA_BARRIER_REQUEST
}

interface BarrierSuccess {
   type: typeof FETCHING_DATA_BARRIER_SUCCESS,
   trigger: number,
   payload: BarrierState[]
}

interface BarrierFailure {
   type: typeof FETCHING_DATA_BARRIER_FAILURE,
   payload: any
}

interface BarrierTogglePopupSelectors {
   type: typeof TOGGLE_MODAL_BARRIER
}

interface BarrierTogglePopupEquipment {
   type: typeof TOGGLE_MODAL_BARRIER_MAIN_INFO
}

export type BarrierActions = BarrierRequest | BarrierSuccess | BarrierFailure | BarrierTogglePopupSelectors | BarrierTogglePopupEquipment;
