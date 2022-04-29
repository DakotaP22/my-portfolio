import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import React, { useState } from "react";
import ThemeContext from "../contexts/ThemeContext";



function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout theme={theme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default MyApp;

