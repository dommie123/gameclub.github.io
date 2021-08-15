import {AUTH_LOGIN, AUTH_LOGOUT, GET_ALL_USERS, REGISTER_ADMIN, REGISTER_USER, UPDATE_ADMIN, UPDATE_USER, BAN_USER} from './types';
import {GameClubDB} from './axios-endpoints';

export const registerUser = (u) => {
    return function(dispatch) {
        let user = GameClubDB.post("/user/", {
            id: u.id,
            username: u.username,
            password: u.password,
            firstName: u.firstName,
            lastName: u.lastName,
            email: u.email
        }).then(data => dispatch({
            type: REGISTER_USER,
            newUser: data
        }));
        console.log(user);
        return user.data;
    }
}

export const registerAdmin = (admin) => {
    return function(dispatch) {
        let user = GameClubDB.post("/user/", {
            id: admin.id,
            username: admin.username,
            password: admin.password,
            firstName: admin.firstName,
            lastName: admin.lastName,
            email: admin.email
        }).then(data => dispatch({
            type: REGISTER_ADMIN,
            newUser: data
        }));
        console.log(user);
        return user.data;
    }
}

export const updateUser = (u) => {
    return function(dispatch) {
        let user = GameClubDB.put("/user/", {
            id: u.id,
            username: u.username,
            password: u.password,
            firstName: u.firstName,
            lastName: u.lastName,
            email: u.email
        }).then(data => dispatch({
            type: UPDATE_USER,
            currentUser: data
        }));
        console.log(user);
        return user.data;
    }
}

export const updateAdmin = (admin) => {
    return function(dispatch) {
        let user = GameClubDB.put("/user/", {
            id: admin.id,
            username: admin.username,
            password: admin.password,
            firstName: admin.firstName,
            lastName: admin.lastName,
            email: admin.email
        }).then(data => dispatch({
            type: UPDATE_ADMIN,
            currentUser: data
        }));
        console.log(user);
        return user.data;
    }
}

export const banUser = (user) => {
    return function(dispatch) {
        return GameClubDB.put("/user/", {
            id: user.id,
            banned: true
        }).then(response => dispatch({
            type: BAN_USER,
            newUser: response.data
        }))
    }
}
export const logout = () => {
    return function(dispatch) {
        return dispatch({
            type: AUTH_LOGOUT
        });
    }
}

export const login = (username) => {
    return function(dispatch) {
        /*let user = */return GameClubDB.get(`/user/username/${username}`).then(data => dispatch({
            type: AUTH_LOGIN,
            currentUser: data
        }));
        //console.log(user);
        //return await user;
    }
}

export const getAllUsers = () => {
    return function(dispatch) {
        let users = GameClubDB.get("/user/all").then(data => dispatch({
            type: GET_ALL_USERS,
            payload: data
        }));
        //console.log(users);
        return users.data;
    }
}