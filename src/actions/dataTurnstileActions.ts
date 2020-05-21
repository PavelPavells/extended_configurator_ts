/**
 * Импорт зависимостей из NPM
*/
import axios from 'axios';
import site from '../constants/constants';
import { Dispatch } from 'react';

/**
 * Импорт основных констант для экшенов
 */
import {
    TurnstileActions,
    FETCHING_DATA_TURNSTILE_REQUEST,
    FETCHING_DATA_TURNSTILE_SUCCESS,
    FETCHING_DATA_TURNSTILE_FAILURE,
    TOGGLE_MODAL_TURNSTILE,
    TOGGLE_MODAL_TURNSTILE_MAIN_INFO
} from '../constants/constants';

/**
 * Экшен для инациализации асинхронного запроса
 */
export const fetchingDataTurnstileRequest = (): TurnstileActions => ({ 
    type: FETCHING_DATA_TURNSTILE_REQUEST
});

/**
 *  Экшен для обработки и запись полученных данных в редьюсер
 */
export const fetchingDataTurnstileSuccess = (data: any, trigger: number): TurnstileActions => ({
    type: FETCHING_DATA_TURNSTILE_SUCCESS,
    trigger: trigger,
    payload: data.data
});

/**
 * Экшен для обработки запроса с ошибкой
 */
export const fetchingDataTurnstileFailure = (error: any): TurnstileActions => ({
    type: FETCHING_DATA_TURNSTILE_FAILURE,
    payload: error
});

/**
 * Экшен для вызовов в Компонентах
 */
export const fetchDataTurnstile = (data: any, trigger: number) => async (dispatch: Dispatch<TurnstileActions>) => {
    dispatch(fetchingDataTurnstileRequest());
    try {
        if (window.location.search !== "") {
            if ( data.data.result.code >= 0 ) {
                    await axios.get(`${site}/turnstile${window.location.search}`)
                    .then(data => {
                        dispatch(fetchingDataTurnstileSuccess(data, trigger));
                    })
                    .catch(error => { console.log(error); });
            }
        } else {
            await axios.post(`${site}/turnstile`, {
                app_id: 'APP_ID',
                trigger: data.trigger,
                trigger_state: data.trigger_state,
                seria: data.seria,
                button_seria_state: data.button_seria_state,
                button_corpse_state: data.button_corpse_state,
                module_selectors: [
                    {
                        module: 0,
                        state: data.selectOne ? data.selectOne : 0
                    },
                    {
                        module: 1,
                        state: data.selectTwo ? data.selectTwo : 0
                    },
                    {
                        module: 2,
                        state: data.selectThree ? data.selectThree : 0
                    },
                    {
                        module: 3,
                        state: data.selectFour ? data.selectFour : 0
                    },
                    {
                        module: 4,
                        state: data.selectFive && data.selectFive < 0 ? 0 : data.selectFive
                    },
                    {
                        module: 5,
                        state: data.selectSix && data.selectSix < 0 ? 0 : data.selectSix
                    },
                    {
                        module: 6,
                        state: data.selectSeven && data.selectSeven < 0 ? 0 : data.selectSeven
                    },
                    {
                        module: 7,
                        state: data.selectEight && data.selectEight < 0 ? 0 : data.selectEight
                    }
                    //{
                    //    module: 8,
                    //    state: data.selectNine && data.selectNine < 0 ? 0 : data.selectNine
                    //}
                ]
            })
            .then(data => {
                dispatch(fetchingDataTurnstileSuccess(data, trigger));
            })
            .catch(error => { console.log(error); });   
        }
    } catch (error) {
        dispatch(fetchingDataTurnstileFailure(error));
    }
    
};

/**
 * Экшен для открытия/закрытия Попап-окна в Компоненте Selectors
 */
export const togglePopupWindowTurnstile = (): TurnstileActions => ({ 
    type: TOGGLE_MODAL_TURNSTILE 
});

/**
 * Экшен для открытия/закрытия Попап-окна в Компоненте Equipment
 */
export const togglePopupWindowMainInfoTurnstile = (): TurnstileActions => ({ 
    type: TOGGLE_MODAL_TURNSTILE_MAIN_INFO 
});
