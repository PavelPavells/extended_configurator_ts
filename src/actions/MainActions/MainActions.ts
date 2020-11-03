import axios from 'axios';
import site from '../../constants/Global/GlobalSetup';
import { Dispatch } from 'react';
import {
    FETCHING_DATA_MAIN_REQUEST,
    FETCHING_DATA_MAIN_SUCCESS,
    FETCHING_DATA_MAIN_FAILURE
} from '../../constants/Main/MainVariables';
import { MainActions } from '../../constants/Main/MainConstants';

export const fetchingDataMainRequest = (): MainActions => ({ 
    type: FETCHING_DATA_MAIN_REQUEST
});

export const fetchingDataMainSuccess = (data: any): MainActions => ({
    type: FETCHING_DATA_MAIN_SUCCESS,
    payload: data.data
});

export const fetchingDataMainFailure = (error: any): MainActions => ({
    type: FETCHING_DATA_MAIN_FAILURE,
    payload: error
});

export const fetchDataMain = () => async (dispatch: Dispatch<MainActions>) => {
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
