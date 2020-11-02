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