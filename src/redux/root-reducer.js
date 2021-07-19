import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cardReducer from './card/card.reducer';

export default combineReducers({
    card: cardReducer,
    user: userReducer
})

