/**
 * Импорт зависимостей из NPM
*/
import axios from 'axios';
import site from '../../../constants/Global/GlobalSetup';
import { Dispatch } from 'react';

/**
 * Импорт основных констант для экшенов
 */
import {
    FETCHING_DATA_POPUP_TURNSTILE_REQUEST,
    FETCHING_DATA_POPUP_TURNSTILE_SUCCESS,
    FETCHING_DATA_POPUP_TURNSTILE_FAILURE
} from '../../../constants/Popup/popup-turnstile/PopupVariables';

import { TurnstilePopupActions } from '../../../constants/Popup/popup-turnstile/PopupConstants';

/**
 * Экшен для инациализации асинхронного запроса
 */
export const fetchingDataPopupTurnstileRequest = (): TurnstilePopupActions => ({
    type: FETCHING_DATA_POPUP_TURNSTILE_REQUEST
})

/**
 *  Экшен для обработки и запись полученных данных в редьюсер
 */
export const fetchingDataPopupTurnstileSuccess = (data: any, trigger: number): TurnstilePopupActions => ({
    type: FETCHING_DATA_POPUP_TURNSTILE_SUCCESS,
    trigger: trigger,
    payload: data.data
})

/**
 * Экшен для обработки запроса с ошибкой
 */
export const fetchingDataPopupTurnstileFailure = (error: any): TurnstilePopupActions => ({
    type: FETCHING_DATA_POPUP_TURNSTILE_FAILURE,
    payload: error
});

/**
 * Экшен для вызовов в Компонентах
 */
export const fetchDataPopupTurnstile = (data: any, trigger: number) => async (dispatch: Dispatch<TurnstilePopupActions>) => {
    dispatch(fetchingDataPopupTurnstileRequest());
    try {
        await axios.post(`${site}/turnstile/module`, {
            app_id: 'APP_ID',
            trigger: data.trigger,
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
                dispatch(fetchingDataPopupTurnstileSuccess(data, trigger));
            })
            .catch(error => { console.log(error); });
    } catch (error) {
        dispatch(fetchingDataPopupTurnstileFailure(error));
    }
};