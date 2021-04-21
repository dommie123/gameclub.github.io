import {AUTH_LOGIN, GET_ALL_USERS, AUTH_LOGOUT, REGISTER_ADMIN, REGISTER_USER} from '../actions/types';

const initialState = {
    users: [],
    currentUser: null,
    isLoggedIn: false,
    isAdmin: false
}

export default function(state=initialState, action) {
    switch (action.type) {
        case AUTH_LOGIN: 
        return {
            ...state,
            currentUser: action.currentUser,
            isLoggedIn: true,
            isAdmin: action.currentUser.isAdmin
        }
        case AUTH_LOGOUT:
        return initialState;
        case REGISTER_USER:
        return {
            ...state,
            currentUser: action.newUser,
            isLoggedIn: false,
            isAdmin: false
        }
        case REGISTER_ADMIN: 
        return {
            ...state,
            currentUser: action.newUser,
            isLoggedIn: false,
            isAdmin: true
        }
        case GET_ALL_USERS:
        return {
            ...state,
            users: action.payload
        }
    }
}