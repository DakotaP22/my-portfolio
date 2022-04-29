import React from "react";

const ThemeContext = React.createContext({
  theme: "en",
  setTheme: (theme: string) => {},
});
 
export default ThemeContext;