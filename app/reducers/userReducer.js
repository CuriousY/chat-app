import { GET_CHAT, POST_CHAT, GET_USER, SET_USER, SET_SIGNUP_FLAG, GET_SIGNUP_FLAG,SUBMIT_USER } from '../actions/actionType';

const initialState = {
    user: {
        username: '',
        mobile: '',
        profileImage : ''

    },
    fetchedUser : {

    },
    init_signup_flag: false,
    is_signup_complete: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER: return {
            ...state,
            user: action.payload,
            is_signup_complete: true
        };
        case GET_USER: return {
            ...state,
            fetchedUser: action.payload
        };
        case SET_SIGNUP_FLAG: return {
            ...state,
            init_signup_flag: payload.init_signup_flag
        };
        case GET_SIGNUP_FLAG: return {
            ...state
        }
        default:
            return state;
    }
}