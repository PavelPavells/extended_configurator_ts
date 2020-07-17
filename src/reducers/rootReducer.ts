import { combineReducers } from 'redux';
import dataMainReducer from './dataMainReducer';
import dataTurnstileReducer from './dataTurnstileReducer';
import dataBarrierReducer from './dataTurnstileReducer';
import dataTurnstilePopupReducer from './dataPopupReducer'

const rootReducer = combineReducers({
    main: dataMainReducer,
    turnstile: dataTurnstileReducer,
    barrier: dataBarrierReducer,
    popup: dataTurnstilePopupReducer
})

export default rootReducer;