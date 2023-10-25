import {combineReducers} from 'redux';

import userReducer from './user-reducer';
import {UserAction} from '../actions';

const appReducer = combineReducers({
    user: userReducer,
});

const rootReducer = (state, action) =>{
    if(action.type === UserAction.LOGOUT){
        state = undefined;
    }
    return appReducer(state, action);
}

export default rootReducer;