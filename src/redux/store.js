import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// Reducers
import userReducer from "./userSlice";


const persistConfig = {
    key: "expense_store",
    storage
};

export const store = configureStore({
    reducer: {
        user: persistReducer(persistConfig, userReducer)
    },
    middleware: [thunk]
});


export const persistor = persistStore(store);