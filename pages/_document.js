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

          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WG3G8ZBR');
              `,
            }}
          /> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              // Escuchar el evento de cambio de ruta
              window.addEventListener("routeChange", () => {
                // Lanzar una función
                function lanzarEvento() {
                  alert("Ruta cambiada");
                }

                lanzarEvento();
              });
            `,
            }}
          /> */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
