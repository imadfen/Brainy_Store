import Head from "next/head";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Brainy Store</title>
        <meta name="description" content="This is Brainy Store for swag Brainy products" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="px-20 pt-32 pb-10 cursor-default flex-1">
          <Component {...pageProps}/>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
