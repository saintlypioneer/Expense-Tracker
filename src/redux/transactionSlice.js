import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    }
});

export const {addTransaction} = transactionsSlice.actions;

export default transactionsSlice.reducer;