import "../styles/globals.css";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
// import Script from 'next/script';
import { useRouter } from "next/router";
import mixpanel from "mixpanel-browser";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

export default function App({ Component, pageProps }) {
  const [rutaActual, setRutaActual] = useState("");
  const router = useRouter();
  useEffect(() => {
    setRutaActual(router.pathname);

    mixpanel.init("4671123e063f304fd9ec7ce40234861f", { debug: true });

    let dominio = window.location.host;
    let ruta = window.location.pathname;
    let hashURL = window.location.hash;
    let fullPath = window.location.href;
    let referencia = document.referrer;
    let pageDate = document.lastModified;

    const handleRouteChange = (rutaActual) => {
      if (dominio === "tucar.app") {
        switch (ruta) {
          // RASTREO HOME
          case "/":
            if (!localStorage.getItem("referencia")) {
              localStorage.setItem("referencia", document.referrer);
            }
            mixpanel.track(`P. Inicio`, {
              URL_Completa: fullPath,
              URL_Ruta: ruta,
              Referencia: referencia,
              Fecha: pageDate,
            });
            break;
          // RASTREO PORQUE TUCAR
          case "/por-que-tucar":
            mixpanel.track(`P. Por qué Tucar`, {
              URL_Completa: fullPath,
              URL_Ruta: ruta,
              Referencia: referencia,
              Fecha: pageDate,
            });
            break;
          // RASTREO COMO FUNCIONA
          case "/como-funciona":
            mixpanel.track(`P. Cómo funciona Tucar`, {
              URL_Completa: fullPath,
              URL_Ruta: ruta,
              Referencia: referencia,
              Fecha: pageDate,
            });
            break;
          // RASTREO PLAN PREMIUM
          case "/plan-premium":
            mixpanel.track(`P. Plan Premium`, {
              URL_Completa: fullPath,
              URL_Ruta: ruta,
              Referencia: referencia,
              Fecha: pageDate,
            });
            break;
          // RASTREO PLAN STANDARD
          case "/plan-standard":
            mixpanel.track(`P. Plan Standard`, {
              URL_Completa: fullPath,
              URL_Ruta: ruta,
              Referencia: referencia,
              Fecha: pageDate,
            });
            break;
          // RASTREO BENEFICIOS
          case "/beneficios":
            mixpanel.track(`P. Beneficios`, {
              URL_Completa: fullPath,
              URL_Ruta: ruta,
              Referencia: referencia,
              Fecha: pageDate,
            });
            break;

          case "/recursos/terminos-y-condiciones":
            mixpanel.track(`P. Términos y condiciones`, {
              URL_Completa: fullPath,
              URL_Ruta: ruta,
              Referencia: referencia,
              Fecha: pageDate,
            });
            break;
          // RASTREO PREGUNTAS FRECUENTES
          case "/recursos/preguntas-frecuentes":
            mixpanel.track(`P. Preguntas frecuentes`, {
              URL_Completa: fullPath,
              URL_Ruta: ruta,
              Referencia: referencia,
              Fecha: pageDate,
            });
            break;
          // RASTREO POLITICAS DE PRIVACIDAD
          case "/recursos/politica-de-privacidad":
            mixpanel.track(`P. Política de privacidad`, {
              URL_Completa: fullPath,
              URL_Ruta: ruta,
              Referencia: referencia,
              Fecha: pageDate,
            });
            break;
          // RASTREO AYUDA
          case "/recursos/ayuda":
            mixpanel.track(`P. Ayuda`, {
              URL_Completa: fullPath,
              URL_Ruta: ruta,
              Referencia: referencia,
              Fecha: pageDate,
            });
            break;
          // RASTREO NOSOTROS
          case "/nosotros":
            mixpanel.track(`P. Nosotros`, {
              URL_Completa: fullPath,
              URL_Ruta: ruta,
              Referencia: referencia,
              Fecha: pageDate,
            });
            break;
          default:
          // No hacer nada
        }
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
  }, [router.pathname]);

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-P425PK4" });
  }, []);

  useEffect(() => {
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 3906293, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  }, []);

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
