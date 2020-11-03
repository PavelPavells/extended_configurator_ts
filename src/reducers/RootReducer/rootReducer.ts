import { combineReducers } from 'redux';
import MainReducer from '../MainReducers/MainReducer';
import TurnstileReducer from '../TurnstileReducers/TurnstileReducer';
import BarrierReducer from '../BarrierReducers/BarrierReducer';
import PopupReducer from '../PopupReducer/PopupReducer'

const rootReducer = combineReducers({
    main: MainReducer,
    turnstile: TurnstileReducer,
    barrier: BarrierReducer,
    popup: PopupReducer
})

export default rootReducer;