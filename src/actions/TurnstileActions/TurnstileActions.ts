import axios from 'axios';
import site from '../../constants/Global/GlobalSetup';
import { Dispatch } from 'react';
import {
    FETCHING_DATA_TURNSTILE_REQUEST,
    FETCHING_DATA_TURNSTILE_SUCCESS,
    FETCHING_DATA_TURNSTILE_FAILURE,
    TOGGLE_MODAL_TURNSTILE,
    TOGGLE_MODAL_TURNSTILE_MAIN_INFO
} from '../../constants/Turnstile/TurnstileVariables';
import { TurnstileActions } from '../../constants/Turnstile/TurnstileConstants';

export const fetchingDataTurnstileRequest = (): TurnstileActions => ({ 
    type: FETCHING_DATA_TURNSTILE_REQUEST
});

export const fetchingDataTurnstileSuccess = (data: any, trigger: number): TurnstileActions => ({
    type: FETCHING_DATA_TURNSTILE_SUCCESS,
    trigger: trigger,
    payload: data.data
});

export const fetchingDataTurnstileFailure = (error: any): TurnstileActions => ({
    type: FETCHING_DATA_TURNSTILE_FAILURE,
    payload: error
});

export const togglePopupWindowTurnstile = (): TurnstileActions => ({ 
    type: TOGGLE_MODAL_TURNSTILE 
});

export const togglePopupWindowMainInfoTurnstile = (): TurnstileActions => ({ 
    type: TOGGLE_MODAL_TURNSTILE_MAIN_INFO 
});

export const fetchDataTurnstile = (data: any, trigger: number) => async (dispatch: Dispatch<TurnstileActions>) => {
    // dispatch(fetchingDataTurnstileRequest());
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
                    // @ts-ignore  /** Typescript не применяет "<", т.к. не работает с boolean как с number */
                    state: data.selectFive && data.selectFive < 0 ? 0 : data.selectFive
                },
                {
                    module: 5,
                    // @ts-ignore  /** Typescript не применяет "<", т.к. не работает с boolean как с number */
                    state: data.selectSix && data.selectSix < 0 ? 0 : data.selectSix
                },
                {
                    module: 6,
                    // @ts-ignore  /** Typescript не применяет "<", т.к. не работает с boolean как с number */
                    state: data.selectSeven && data.selectSeven < 0 ? 0 : data.selectSeven
                },
                {
                    module: 7,
                    // @ts-ignore  /** Typescript не применяет "<", т.к. не работает с boolean как с number */
                    state: data.selectEight && data.selectEight < 0 ? 0 : data.selectEight
                },
                {
                   module: 8,
                    // @ts-ignore  /** Typescript не применяет "<", т.к. не работает с boolean как с number */
                   state: data.selectNine && data.selectNine < 0 ? 0 : data.selectNine
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
