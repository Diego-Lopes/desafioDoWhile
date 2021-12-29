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
          <link rel="canonical" href="https://netfamilia.diegodev.com.br" />
          <link rel="shortcut icon" href="./img/family.png" type="image/png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* SEO */}
          {/* <base href="https://netfamilia.diegodev.com.br" /> */}

          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="apple-touch-fullscreen" content="yes" />
          <meta
            name="keywords"
            content="Diego Lopes, DiegoDev, Diego dev, marketing, inbound, outbound, designer, site, Rocketseat, seo, google ads, google, marca, branding, redes sociais, facebook, instagram, youtube, linkedin, monitoramento, resultados, performance, marketing, mkt digital, marketing digital, ji-parana"
          />
          <meta
            name="author"
            content="NetFamilia | Made whit ❤ by Diego Lopes"
          />
          <meta
            name="description"
            content="NetFamilia tem o intuito de facilitar o acesso a educação por meio da tecnoligia atual."
          />

          {/*
          #All: Valor default, significa vazio, o robô de busca não recebe nenhuma informação.
          #Index: Os robôs de busca podem incluir a páginanormalmente.
          #Follow: Robôs podem indexar a página e ainda seguir os links para outras páginas que ela contém.
          #NoIndex:Os links podem ser seguidos, mas a página não é indexada.
          #NoFollow: A página é indexada, mas os links não são seguidos.
          #None: Os robôs podem ignorar a página.
          #NoArchive (Apenas Google): A página não é arquivada.
          */}
          <meta name="robots" content="index, follow" />
          <meta
            name="google-site-verification"
            content="n6b0or3UqwMLa2qpy3Q_c1MvsMp5ORnoGmPnPPIW_5g"
          />

          {/* END SEO */}

          {/* CARD SHOW FB */}
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="NetFamília | Made whit ❤ by Diego Lopes"
          />
          <meta property="og:site_name" content="NetFamília" />
          <meta
            property="og:image"
            content="https://netfamilia.diegodev.com.br/img/screen.png"
          />
          <meta
            property="og:description"
            content="Um projeto feito por Diego Lopes, para fins profissional."
          />
          <meta
            property="og:url"
            content="https://netfamilia.diegodev.com.br"
          />

          {/* END CARD */}
          {/* tag manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-THL98ZT');`,
            }}
          />
          {/* end tag */}
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-THL98ZT"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
