import { GET_CHAT, POST_CHAT, FETCH_USER, SET_USER } from '../actions/actionType';

const initialState = {
    user: {
        name: ''
    }
}

export default function (state = initialState, action) {
    console.log('reducer ', action)
    switch (action.type) {
        case SET_USER: return {
            ...state,
            user: action.payload
        };
        case FETCH_USER: return {
            ...state
        };
        default:
            return state;
    }
}