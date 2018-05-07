import { GET_CHAT, POST_CHAT, GET_USER, SET_MESSAGE, SET_USER, INITIATE_SIGNUP, GET_SIGNUP_FLAG, SUBMIT_USER } from './actionType';

import { SERVER_URL } from '../config'

let defaultChat = [];
let defaultUser = {};

export const getChat = (chat) => dispatch => {
    dispatch({
        type: GET_CHAT,
        payload: chat
    });
};

export const postChat = (chat) => dispatch => {
    dispatch({
        type: POST_CHAT,
        payload: chat
    })
}

export const getUser = (mobile) => dispatch => {
    console.log('mobile ', mobile);
    fetch(SERVER_URL + '/getUserDetails?mobile=' + mobile)
        .then(res => res.json())
        .then(user =>
            dispatch({
                type: GET_USER,
                payload: user
            })
        );
}

export const setUser = (user) => dispatch => {
    dispatch({
        type: SET_USER,
        payload: user
    })
}

export const postUser = (user) => dispatch => {
    dispatch({
        type: SET_USER,
        payload: user
    })
}

export const setSignUpState = (init_signup_flag) => dispatch => {
    dispatch({
        type: SET_SIGNUP_FLAG,
        payload: init_signup_flag
    })
}

export const getSignUpState = () => dispatch => {
    dispatch({
        type: SUBMIT_USER,
        payload: defaultUser
    })
}

export const setMessage = (message) => dispatch => {
    dispatch({
        type: SET_MESSAGE,
        payload: message
    })
}

