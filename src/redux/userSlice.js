import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    loading: false,
    errors: false,
    isAuthenticated: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.isAuthenticated = true
            state.errors = false
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.loading = false
            state.errors = true
            state.isAuthenticated = false
        },
        logout: (state) => {
            state.loading = false
            state.currentUser = null
            state.errors = false
            state.isAuthenticated = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { loginStart, loginSuccess, loginFailure, logout } =
    userSlice.actions

export default userSlice.reducer
