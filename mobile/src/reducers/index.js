import {combineReducers} from "redux";
import userReducer, { useReducer } from "./user-reducers";
import {UserAction} from '../actions';

const appReducer = combineReducers({
    user: userReducer,
});

const rootReducer = (state,action)=>{
    if(action.type === UserAction.LOGOUT){
        state = undefined;
    }
    return appReducer (state , action);
}

export default rootReducer;