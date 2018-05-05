import { GET_CHAT, POST_CHAT, FETCH_USER, SET_USER, INITIATE_SIGNUP, GET_SIGNUP_FLAG } from './actionType';

let defaultChat = [];
let defaultUser = {};

export const fetchChat = () => dispatch => {
    dispatch({
        type: GET_CHAT,
        payload: defaultChat
    });
};

export const postChat = (chat) => dispatch => {
    dispatch({
        type: GET_CHAT,
        payload: chat
    })
}

export const fetchUser = () => dispatch => {
    dispatch({
        type: FETCH_USER,
        payload: defaultUser
    })
}

export const setUser = (user) => dispatch => {
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
        type: GET_SIGNUP_FLAG,
        payload: defaultUser
    })
}