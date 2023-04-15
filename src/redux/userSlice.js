import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        fullname: "",
        email: "",
        password: "",
        isLoggedin: false,
        isWrongCredentials: false
    },
    reducers: {
        login: (state, action)=>{
            console.log(action.payload);
            if (action.payload.email == "a@b.c" && action.payload.password=="111"){
                // correct credentials
                state.fullname = "Temp Name";
                state.email = action.payload.email;
                state.password = action.payload.password;
                state.isLoggedin = true;
                state.isWrongCredentials = false;
            } else {
                state.fullname = "";
                state.email = "";
                state.password = "";
                state.isLoggedin = false;
                state.isWrongCredentials = true;
            }
        },
        logout: (state)=>{
            state.fullname = "";
            state.email = "";
            state.password = "";
            state.isLoggedin = false;
            state.isWrongCredentials = false;
        }
    }
});

export const {login} = userSlice.actions;

export default userSlice.reducer;