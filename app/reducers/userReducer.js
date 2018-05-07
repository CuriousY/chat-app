import { GET_CHAT, POST_CHAT, SET_MESSAGE, GET_USER, SET_USER, SET_SIGNUP_FLAG, GET_SIGNUP_FLAG, SUBMIT_USER } from '../actions/actionType';

const initialState = {
    user: {
        username: '',
        mobile: '',
        profileImage: '',

    },
    fetchedUser: {

    },
    init_signup_flag: false,
    is_signup_complete: false,
    chats: [],
    chatItem: {},
    message: '',
    endpoint:''
}

export default function (state = initialState, action) {
    console.log('reducer ', action.payload);
    switch (action.type) {
        case SET_USER: return {
            ...state,
            user: action.payload,
            is_signup_complete: true
        };
        case GET_CHAT:
            let chats = state.chats;
            return {
                ...state,
                chats: [...state.chats, action.payload]
            };
        case POST_CHAT: return {
            ...state,
            chats: [...state.chats, action.payload]
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
        };
        case SET_MESSAGE: return {
            ...state,
            message: action.payload
        }
        default:
            return state;
    }
}