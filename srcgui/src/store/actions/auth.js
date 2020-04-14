import axios from 'axios';
import * as actionTypes from './actionTypes';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}


export const authLogin = (username, password) => {
    const config={
        headers:{
            "Content-Type": "application/json"
        }
    }
    return dispatch => {
        dispatch(authStart());
        //axios.post('http://127.0.0.1:8000/auth/login', {
        //    username: username,
        //    password: password
        //}, config)
        //    .then(res => {
        //        const token = res.data.token;
        //        console.log(token);
        //        localStorage.setItem('token', token);
                  dispatch(authSuccess('hbcjsndasnd283283'));
        //    })
        //    .catch(err => {
        //        dispatch(authFail(err));
        //    })
    }
}

export const authSignup = (username, email, first_name, last_name, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/auth/registerUser', {
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            password: password,
        })
            .then(res => {
                const token = res.data.key;
                localStorage.setItem('token', token);
                dispatch(authStart(token));
            })
            .catch(err => {
                dispatch(authFail(err));
            })
    }
}
