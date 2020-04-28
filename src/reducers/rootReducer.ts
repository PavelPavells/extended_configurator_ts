import { combineReducers } from 'redux';
import dataMainReducer from './dataMainReducer';
import dataTurnstileReducer from './dataTurnstileReducer';

const rootReducer = combineReducers({
    main: dataMainReducer,
    turnstile: dataTurnstileReducer
})

//export type ConfiguratorState = ReturnType<typeof rootReducer>;

export default rootReducer;