import {createSlice} from "@reduxjs/toolkit";
import {apiAction} from "./apiCallActions";

const root = createSlice({
    name: 'wieldy',
    initialState: {
        isAuth: false,
        loginStatus: null,
        tokenStatus: null,
        newUser:null
    },
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        },
        getDataLogin: (state, action) => {
            state.loginStatus = action.payload
        },
        getTokenStatus: (state, action) => {
            state.tokenStatus = action.payload
        },
        createUser: (state, action) => {
            state.newUser = action.payload
        }

    }

})

export const postLogin = (data) => apiAction({
    url: '/user/login',
    data: data,
    method: 'POST',
    onSuccess: root.actions.getDataLogin.type,
    onFail: root.actions.getDataLogin.type,
})

export const getTokenCheck = (token) => apiAction({
    url: '/main/dashboard/crypto',
    headers: {'Authorization': token},
    method: 'GET',
    onSuccess: root.actions.getTokenStatus.type,
    onFail: root.actions.getTokenStatus.type,
})

export const postCreateUser = (data) => apiAction({
    url: '/user/register',
    method: 'POST',
    data:data,
    onSuccess: root.actions.createUser.type,
    onFail: root.actions.createUser.type,
})


export default root.reducer
export const {setIsAuth,getDataLogin,getTokenStatus, createUser} = root.actions
