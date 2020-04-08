/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import {USER_LOGIN_SUCESS } from '../actions/config'

const INITIAL_STATE = { redux: [] ,userLogin : false}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      
        case USER_LOGIN_SUCESS :
            return {...state , userLogin : action.payload}

        default:
            return state;
    }
}
