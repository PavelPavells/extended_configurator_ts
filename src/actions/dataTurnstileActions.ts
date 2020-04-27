/**
 * Импорт зависимостей из NPM
*/
import axios from 'axios';
import site from '../constants/constants';

/**
 * Импорт основных констант для экшенов
 */
import {
    FETCHING_DATA_TURNSTILE_REQUEST,
    FETCHING_DATA_TURNSTILE_SUCCESS,
    FETCHING_DATA_TURNSTILE_FAILURE,
    TOGGLE_MODAL_TURNSTILE,
    TOGGLE_MODAL_TURNSTILE_MAIN_INFO
} from '../constants/constants';

/**
 * Экшен для инациализации асинхронного запроса
 */
export const fetchingDataTurnstileRequest = () => ({ type: FETCHING_DATA_TURNSTILE_REQUEST });

/**
 *  Экшен для обработки и запись полученных данных в редьюсер
 */

// @ts-ignore
export const fetchingDataTurnstileSuccess = (data, trigger) => ({
    type: FETCHING_DATA_TURNSTILE_SUCCESS,
    trigger: trigger,
    payload: data.data
});

/**
 * Экшен для обработки запроса с ошибкой
 */

 // @ts-ignore
export const fetchingDataTurnstileFailure = error => ({
    type: FETCHING_DATA_TURNSTILE_FAILURE,
    payload: error
});

/**
 * Экшен для вызовов в Компонентах
 */

 // @ts-ignore
export const fetchDataTurnstile = (data, trigger) => {
    // @ts-ignore
    return async dispatch => {
        dispatch(fetchingDataTurnstileRequest());
        //console.log(data ? 'app_id : ' + data.app_id : 'id');
        //console.log(data ? 'trigger : ' + data.trigger : 0);
        //console.log(data ? 'trigger_state : ' + data.trigger : 0);
        //console.log(data ? 'button_seria_state : ' + data.button_seria_state: 0);
        //console.log(data ? 'button_corpse_state : ' + data.button_corpse_state : 0)
        //console.log(data ? 'selector 1 : ' + data.selectOne : 0)
        //console.log(data ? 'selector 2 : ' + data.selectTwo : 0)
        //console.log(data ? 'selector 3 : ' + data.selectThree : 0)
        //console.log(data ? 'selector 4 : ' + data.selectFour : 0)
        //console.log(data ? 'selector 5 : ' + data.selectFive : 0)
        //console.log(data ? 'selector 6 : ' + data.selectSix : 0)
        //console.log(data ? 'selector 7 : ' + data.selectSeven : 0)
        //console.log(data ? 'selector 8 : ' + data.selectEight : 0)
        try {
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
                        // @ts-ignore
                        state: data.selectFive && !data.selectFive < 0 ? data.selectFive : 0
                    },
                    {
                        module: 5,
                        // @ts-ignore
                        state: data.selectSix && !data.selectSix < 0 ? data.selectSix : 0
                    },
                    {
                        module: 6,
                        // @ts-ignore
                        state: data.selectSeven && !data.selectSeven < 0 ? data.selectSeven : 0
                    },
                    {
                        module: 7,
                        // @ts-ignore
                        state: data.selectEight && !data.selectEight < 0 ? data.selectEight : 0
                    }
                ]
            })
                .then(data => {
                    dispatch(fetchingDataTurnstileSuccess(data, trigger));
                })
                .catch(error => { console.log(error); });
        } catch (error) {
            dispatch(fetchingDataTurnstileFailure(error));
        }
    };
};

/**
 * Экшен для открытия/закрытия Попап-окна в Компоненте Selectors
 */
export const togglePopupWindowTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE });

/**
 * Экшен для открытия/закрытия Попап-окна в Компоненте Equipment
 */
export const togglePopupWindowMainInfoTurnstile = () => ({ type: TOGGLE_MODAL_TURNSTILE_MAIN_INFO });
