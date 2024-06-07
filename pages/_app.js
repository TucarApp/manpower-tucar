import "../styles/globals.css";

// import Script from 'next/script';


export default function App({ Component, pageProps }) {
 

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
