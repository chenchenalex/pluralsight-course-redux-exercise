import * as types from "../actions/actionTypes";
import initialState from './initialState';

export default function errorMessage (state = initialState, action){
    switch(action.type){
        case types.SAVE_AUTHOR_FAILED:
        return action.error;
        default: 
        return state;
    }
}