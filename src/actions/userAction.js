
import { USER_LOGIN_SUCESS} from '../actions/config';
import * as firebase from 'firebase';
 


export const userLogin = () => async dispatch => {



    console.log('Log IN')
    dispatch({ type: USER_LOGIN_SUCESS, payload: true })
  
    // Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCuRRvfGA3xTDoFyAKxf9uuydpAiLp-x1o",
  authDomain: "iot-gym-82bbe.firebaseapp.com",
  databaseURL: "https://iot-gym-82bbe.firebaseio.com",
  storageBucket: "iot-gym-82bbe.appspot.com",
  measurementId: "G-RZN473SVN6"
};

firebase.initializeApp(firebaseConfig);

  }