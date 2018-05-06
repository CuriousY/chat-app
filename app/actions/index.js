import { GET_CHAT, POST_CHAT, GET_USER, SET_MESSAGE,SET_USER, INITIATE_SIGNUP, GET_SIGNUP_FLAG, SUBMIT_USER } from './actionType';

let defaultChat = [];
let defaultUser = {};

export const getChat = (chats) => dispatch => {
    dispatch({
        type: GET_CHAT,
        payload: chats
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
    fetch('http://192.168.1.208:3000/getUserDetails?mobile='+mobile)
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

