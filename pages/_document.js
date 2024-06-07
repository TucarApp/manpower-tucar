import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            rel="stylesheet"
            href="https://embedded-files.tryadviser.com/public/tucar/adviser-embedded.css"
          />
          <script
            src="https://embedded-files.tryadviser.com/public/tucar/adviser-embedded.js"
            defer
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
