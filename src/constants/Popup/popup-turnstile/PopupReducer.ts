/**
 * *********************** Интерфейсы стейта Компонента popup(турникеты) ***********************
 */

export interface TurnstilePopupState {
    isFetching: boolean,
    errorMessage: string,
    modal: boolean,
    info: boolean,
    data: any
 }