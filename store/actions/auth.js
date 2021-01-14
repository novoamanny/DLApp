import axios from 'axios';
// import {setAlert} from './alert';

import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE} from './types';
import setAuthToken from '../../utils/setAuthToken';
import AsyncStorage from '@react-native-async-storage/async-storage'


const config = {
  headers: {
      'Content-Type': 'application/json'
  }
}


export const loadUser = () => async dispatch =>{
  

  if(AsyncStorage.token){
    console.log(AsyncStorage.token)
    setAuthToken(AsyncStorage.token);
  }

  try {
    const res = await axios.get('http://192.168.1.5::5000/api/auth');
    
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
  
}



// Register User
export const register = (FirstName, LastName, Email, Password) => async dispatch =>{
  
    const body= JSON.stringify({FirstName, LastName, Email, Password});
    

    try{
        const res = await axios.post('http://192.168.1.5:5000/api/users/enroll', body, config);
        
        
      
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    }catch(err){
        const errors = err.response.data.errors;

        if(errors){
            // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL,
        });
    }
}


// Login User
export const login = (Email, Password) => async dispatch => {
  
    const body = JSON.stringify({ Email, Password });

   
  
    try {
      const res = await axios.post('http://192.168.1.5:5000/api/auth', body, config);
        
      
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
  
      dispatch(loadUser());
    } catch (err) {

      const errors = err.response.data.errors;
      
      if (errors) {
        // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
      
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };

// Logout User
export const logout = () => dispatch =>{
  dispatch({type: CLEAR_PROFILE})
  dispatch({type: LOGOUT})
  
}