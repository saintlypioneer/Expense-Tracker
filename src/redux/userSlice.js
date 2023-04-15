import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3002"

// async-actions
export const addUser = createAsyncThunk("addUser", async(data)=>{
    const response = await axios.post(`${BASE_URL}/users`, data);
    return (response.data);
});

export const checkUser = createAsyncThunk("checkUser", async(data)=>{
    const response = await axios.get(`${BASE_URL}/users`);
    const users = response.data;
    const user = users.find((u)=>u.email===data.email && u.password===data.password);
    if (user){
        return user;
    }
    throw new Error("No user found");
});

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
        // login: (state, action)=>{
        //     console.log(action.payload);
        //     if (action.payload.email == "a@b.c" && action.payload.password=="111"){
        //         // correct credentials
        //         state.fullname = "Temp Name";
        //         state.email = action.payload.email;
        //         state.password = action.payload.password;
        //         state.isLoggedin = true;
        //         state.isWrongCredentials = false;
        //     } else {
        //         state.fullname = "";
        //         state.email = "";
        //         state.password = "";
        //         state.isLoggedin = false;
        //         state.isWrongCredentials = true;
        //     }
        // },
        logout: (state)=>{
            state.fullname = "";
            state.email = "";
            state.password = "";
            state.isLoggedin = false;
            state.isWrongCredentials = false;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(addUser.fulfilled, (state, action)=>{
            state.fullname= action.payload.fullname;
            state.email= action.payload.email;
            state.password= action.payload.password;
            state.isLoggedin = true;
            state.isWrongCredentials= false;
        });
        builder.addCase(addUser.rejected, (state, action)=>{
            state.fullname= "";
            state.email= "";
            state.password= "";
            state.isLoggedin= false;
            state.isWrongCredentials= true;
        });
        builder.addCase(checkUser.fulfilled, (state, action)=>{
            console.log("logged in");
            state.fullname= action.payload.fullname;
            state.email= action.payload.email;
            state.password= action.payload.password;
            state.isLoggedin = true;
            state.isWrongCredentials= false;
        });
        builder.addCase(checkUser.rejected, (state, action)=>{
            console.log("wrong credentials");
            state.fullname= "";
            state.email= "";
            state.password= "";
            state.isLoggedin= false;
            state.isWrongCredentials= true;
        });
    }
});

export const {logout} = userSlice.actions;

export default userSlice.reducer;