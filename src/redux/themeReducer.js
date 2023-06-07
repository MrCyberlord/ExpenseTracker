const initialState = {
  isDarkTheme: false,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme,
      };
    default:
      return state;
  }
};

export const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME",
  };
};
