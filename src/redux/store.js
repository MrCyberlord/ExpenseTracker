import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./AuthReducer";
import expenseSlice from "./ExpReducer";
import { themeReducer } from "./themeReducer";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  expense: expenseSlice.reducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
