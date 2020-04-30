/**
 * Импорт зависимостей из NPM
*/
import axios from 'axios';
import site from '../constants/constants';

/**
 * Импорт основных констант для экшенов
 */
import {
    MainActions,
    FETCHING_DATA_MAIN_REQUEST,
    FETCHING_DATA_MAIN_SUCCESS,
    FETCHING_DATA_MAIN_FAILURE
} from '../constants/constants';

/**
 * Экшен для инациализации асинхронного запроса
 */
export const fetchingDataMainRequest = (): MainActions => ({ 
    type: FETCHING_DATA_MAIN_REQUEST
});

/**
 *  Экшен для обработки и запись полученных данных в редьюсер
 */
export const fetchingDataMainSuccess = (data: any): MainActions => ({
    type: FETCHING_DATA_MAIN_SUCCESS,
    payload: data.data
});

/**
 * Экшен для обработки запроса с ошибкой
 */
export const fetchingDataMainFailure = (error: any): MainActions => ({
    type: FETCHING_DATA_MAIN_FAILURE,
    payload: error
});

/**
 * Экшен для вызовов в Компонентах
 */

export const fetchDataMain = () => (dispatch: (arg: MainActions) => void) => {
    dispatch(fetchingDataMainRequest());
    try {
        axios.get(`${site}/main`)
            .then(data => {
                dispatch(fetchingDataMainSuccess(data));
            })
            .catch(error => { console.log(error); });
    } catch (error) {
        dispatch(fetchingDataMainFailure(error));
    }
};
