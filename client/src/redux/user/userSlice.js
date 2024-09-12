import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state,action) => {
            state.currentUser=action.payload;
            state.loading=false;
            state.error=false;
        },
        signInFailure: (state,action) =>{
            state.loading =false;
            state.error = action.payload;
        },
        updateUserStart: (state) =>{
            state.loading = true;
        },
        UpdateUserSuccess: (state,action) => {
            state.currentUser=action.payload;
            state.loading=false;
            state.error=false;
        },
        UpdateUserFailure: (state,action) =>{
            state.loading =false;
            state.error = action.payload;
        },
        deleteUserStart: (state) =>{
            state.loading = true;
        },
        deleteUserSuccess: (state) => {
            state.currentUser=null;
            state.loading=false;
            state.error=false;
        },
        deleteUserFailure: (state,action) =>{
            state.loading =false;
            state.error = action.payload;
        },
    }
});

export const {signInStart,signInSuccess,signInFailure,updateUserStart,UpdateUserSuccess,UpdateUserFailure,deleteUserStart,deleteUserFailure,deleteUserSuccess} = userSlice.actions;

export default userSlice.reducer;