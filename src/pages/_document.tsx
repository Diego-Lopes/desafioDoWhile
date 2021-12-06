import React from "react";
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="canonical" href="https://desafio-do-while.vercel.app/" />
          <link
            rel="icon"
            href="https://cdn-icons.flaticon.com/png/128/3330/premium/3330314.png?token=exp=1638821370~hmac=e3dddee910069d56fc7dd36aeaa9659e"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <meta
            name="author"
            content="NetFamilia | Made whit ❤ by Diego Lopes"
          />
          <meta
            name="description"
            content="NetFamilia tem o intuito de facilitar o acesso a educação por meio da tecnoligia atual."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
