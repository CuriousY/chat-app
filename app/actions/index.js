import { GET_CHAT, POST_CHAT, FETCH_USER, SET_USER } from './actionType';

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
        payload:chat
    })
}

export const fetchUser = () => dispatch => {
    dispatch({
        type: FETCH_USER,
        payload:defaultUser
    })
}

export const setUser = (user) => dispatch => {
    dispatch({
        type: SET_USER,
        payload:user
    })
}