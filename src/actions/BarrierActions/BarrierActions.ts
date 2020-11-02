/**
 * Импорт зависимостей из NPM
*/
import axios from 'axios';
import site from '../../constants/Global/GlobalSetup';
import { Dispatch } from 'react';

/**
 * Импорт основных констант для экшенов
 */
import {
    FETCHING_DATA_BARRIER_REQUEST,
    FETCHING_DATA_BARRIER_SUCCESS,
    FETCHING_DATA_BARRIER_FAILURE,
    TOGGLE_MODAL_BARRIER,
    TOGGLE_MODAL_BARRIER_MAIN_INFO
} from '../../constants/Barrier/BarrierVariables';
import { BarrierActions } from '../../constants/Barrier/BarrierConstants';
/**
 * Экшен для инациализации асинхронного запроса
 */
export const fetchingDataBarrierRequest = (): BarrierActions => ({
    type: FETCHING_DATA_BARRIER_REQUEST
})

/**
 *  Экшен для обработки и запись полученных данных в редьюсер
 */
export const fetchingDataBarrierSuccess = (data: any, trigger: number): BarrierActions => ({
    type: FETCHING_DATA_BARRIER_SUCCESS,
    trigger: trigger,
    payload: data.data
})

/**
 * Экшен для обработки запроса с ошибкой
 */
export const fetchingDataBarrierFailure = (error: any): BarrierActions => ({
    type: FETCHING_DATA_BARRIER_FAILURE,
    payload: error
});

/**
 * Экшен для вызовов в Компонентах
 */
export const fetchDataBarrier = (data: any, trigger: number) => async (dispatch: Dispatch<BarrierActions>) => {
    dispatch(fetchingDataBarrierRequest());
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
                dispatch(fetchingDataBarrierSuccess(data, trigger));
            })
            .catch(error => { console.log(error); });
    } catch (error) {
        dispatch(fetchingDataBarrierFailure(error));
    }
};

/**
 * Экшен для открытия/закрытия Попап-окна в Компоненте Selectors
 */
export const togglePopupWindowBarrier = (): BarrierActions => ({ 
    type: TOGGLE_MODAL_BARRIER
});

/**
 * Экшен для открытия/закрытия Попап-окна в Компоненте Equipment
 */
export const togglePopupWindowMainInfoBarrier = (): BarrierActions => ({ 
    type: TOGGLE_MODAL_BARRIER_MAIN_INFO 
});