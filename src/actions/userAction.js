
import { USER_LOGIN_SUCESS} from '../actions/config'


export const userLogin = () => async dispatch => {

    console.log('Log IN')
    dispatch({ type: USER_LOGIN_SUCESS, payload: true })
  
  }