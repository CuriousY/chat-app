import { GET_CHAT, POST_CHAT, FETCH_USER, SET_USER, SET_SIGNUP_FLAG, GET_SIGNUP_FLAG } from '../actions/actionType';

const initialState = {
    user: {
        username: '',
        mobile: ''

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
        case FETCH_USER: return {
            ...state
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