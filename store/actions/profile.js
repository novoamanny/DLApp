import axios from 'axios';

// import {setAlert} from './alert';

import {
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
    ACCOUNT_DELETED,
    GET_REPOS
} from './types';
import profile from '../reducers/profile';

const config = {
  headers: {
      'Content-Type': 'application/json'
  }
}

// Get current users profile
export const getCurrentProfile = () => async dispatch =>{
    try{
        const res = await axios.get('http://192.168.1.5::5000/api/profile/me');

        

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    }catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}