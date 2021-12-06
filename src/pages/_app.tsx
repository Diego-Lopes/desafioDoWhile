import { GlobalStyle, theme } from "@/styles";
import type { AppProps } from "next/app";
import React from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer
          transition={Bounce}
          limit={2}
          theme="dark"
          autoClose={3000}
          newestOnTop={false}
          rtl={false}
        />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
