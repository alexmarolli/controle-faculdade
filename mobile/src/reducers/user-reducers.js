import {UserAction as Action} from "../actions";
const inittialState = {};

const userReducer = (state= inittialState, {payload , type})=>{
    switch(type){
        case Action.CLEAR:
            return inittialState;
        case Action.SET:
            console.log('reducer user', payload)
            return{...payload}
        default:
            return state;
    }
};

export default userReducer;