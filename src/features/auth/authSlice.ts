import { RootState } from '../../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models';

export interface AuthState {
    isLoggedIn: boolean;
    loggin: boolean;
    currentUser?: User;
}

export interface LoginPayload {
    username: string;
    password: string;
}

const initialState: AuthState = {
    isLoggedIn: false,
    loggin: false,
    currentUser: undefined,
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.loggin = true;
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.loggin = false;
            state.currentUser = action.payload;
            state.isLoggedIn = true;
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.loggin = false;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        },
    },
});

// actions
export const authActions = authSlice.actions;
// selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
// reducers
const authReducer = authSlice.reducer;
export default authReducer;
