export const login = (token, email) => {
    return {
      type: "LOGIN",
      payload: {
        token,
        email
      }
    };
  };
  
  export const logout = () => {
    return {
      type: "LOGOUT"
    };
  };
  
  export const setEmail = (email) => {
    return {
      type: "SET_EMAIL",
      payload: email
    };
  };
  
  export const addExpense = (expense) => {
    return {
      type: "ADD_EXPENSE",
      payload: expense
    };
  };
  
  export const deleteExpense = (id) => {
    return {
      type: "DELETE_EXPENSE",
      payload: id
    };
  };
  
  export const editExpense = (id, updates) => {
    return {
      type: "EDIT_EXPENSE",
      payload: {
        id,
        updates
      }
    };
  };
  