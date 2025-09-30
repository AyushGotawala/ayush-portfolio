import { configureStore } from "@reduxjs/toolkit";
import { contactUsReducer } from "./contactUs";

const store = configureStore({
    reducer : {
        contactUs : contactUsReducer
    }
})

export default store;