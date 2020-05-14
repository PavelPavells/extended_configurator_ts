import { combineReducers } from 'redux';
import dataMainReducer from './dataMainReducer';
import dataTurnstileReducer from './dataTurnstileReducer';
import dataBarrierReducer from './dataTurnstileReducer';

const rootReducer = combineReducers({
    main: dataMainReducer,
    turnstile: dataTurnstileReducer,
    barrier: dataBarrierReducer
})

export default rootReducer;