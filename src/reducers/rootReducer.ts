import { combineReducers } from 'redux';
import dataMainReducer from './dataMainReducer';
import dataTurnstileReducer from './dataTurnstileReducer';

export default combineReducers({
    main: dataMainReducer,
    turnstile: dataTurnstileReducer
})