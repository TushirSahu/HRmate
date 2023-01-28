import { createContext, useEffect, useState } from "react";
export const themeProvider = createContext();
const ThemeContextProvide = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      // document.body.style.backgroundColor = "#121212";
    } else {
      // document.body.style.backgroundColor = "#fff";
      setTheme("light");
    }
  };
  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#121212";
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.body.style.backgroundColor = "#fff";
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <themeProvider.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </themeProvider.Provider>
  );
};
export default ThemeContextProvide;
