import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: true,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true
        }
    }
})

export const { login } = authSlice.actions
export default authSlice.reducer