import { GlobalStyle, theme } from "@/styles";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import Aos from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
