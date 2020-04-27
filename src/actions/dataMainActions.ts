/**
 * Импорт зависимостей из NPM
*/
import axios from 'axios';
import site from '../constants/constants';

/**
 * Импорт основных констант для экшенов
 */
import {
    FETCHING_DATA_MAIN_REQUEST,
    FETCHING_DATA_MAIN_SUCCESS,
    FETCHING_DATA_MAIN_FAILURE
} from '../constants/constants';

/**
 * Экшен для инациализации асинхронного запроса
 */
export const fetchingDataMainRequest = () => ({ type: FETCHING_DATA_MAIN_REQUEST });

/**
 *  Экшен для обработки и запись полученных данных в редьюсер
 */

// @ts-ignore
export const fetchingDataMainSuccess = data => ({
    type: FETCHING_DATA_MAIN_SUCCESS,
    payload: data.data
});

/**
 * Экшен для обработки запроса с ошибкой
 */

 // @ts-ignore
export const fetchingDataMainFailure = error => ({
    type: FETCHING_DATA_MAIN_FAILURE,
    payload: error
});

/**
 * Экшен для вызовов в Компонентах
 */
export const fetchDataMain = () => {

    // @ts-ignore
    return async dispatch => {
        dispatch(fetchingDataMainRequest());
        try {
            await axios.get(`${site}/main`)
                .then(data => {
                    dispatch(fetchingDataMainSuccess(data));
                })
                .catch(error => { console.log(error); });
        } catch (error) {
            dispatch(fetchingDataMainFailure(error));
        }
    };
};
