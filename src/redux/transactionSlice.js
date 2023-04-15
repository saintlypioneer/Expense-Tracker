import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const BASE_URL = "http://localhost:3002"

// async-actions
// export const addTxn = createAsyncThunk("addTxn", async(data)=>{
//     // console.log("TXakfwbfbds,jhNN");
//     const id = useSelector(state => state);
//     // const transactions = await axios.get(`${BASE_URL}/users?id=1`);
//     console.log("TXNN", id);
//     // const response = await axios.patch(`${BASE_URL}/users/id/transactions`, {...transactions, data});
//     // return response.data;
// });

const transactionsSlice = createSlice({
    name: "transaction",
    initialState: {
        transactions: []
    },
    reducers: {
        addTransaction: (state, action)=>{
            state.transactions = [...state.transactions, {
                // adding new transaction as object
                type: action.payload.type,
                category: action.payload.category,
                amount: action.payload.amount,
                date: action.payload.date
            }];
        }
    },
    // extraReducers: (builder)=>{
    //     builder.addCase(addTxn.fulfilled, (state, action)=>{
    //         console.log("TXNS", action.payload);
    //     })
    // }
});

export const {addTransaction} = transactionsSlice.actions;

export default transactionsSlice.reducer;