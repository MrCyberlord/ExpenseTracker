import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  premieum: false,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setExpense: (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
    },
    addExpenseSlice: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    updateExpenseSlice: (state, action) => {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    },
    deleteExpenseSlice: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    },
    setPremieum: (state, action) => {
      return {
        ...state,
        premieum: !state.premieum,
      };
    },
  },
});

export const {
  setExpense,
  addExpenseSlice,
  updateExpenseSlice,
  deleteExpenseSlice,
  setPremieum,
} = expenseSlice.actions;
export default expenseSlice;
