import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeReducer";
import Button from "react-bootstrap/Button";

const ThemeToggle = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <Button
        onClick={handleToggleTheme}
        variant={isDarkTheme ? "light" : "dark"}
      >
        {isDarkTheme ? "Light" : "Dark"} Theme
      </Button>
    </div>
  );
};

export default ThemeToggle;
