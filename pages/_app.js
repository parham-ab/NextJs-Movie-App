// styles
import "../styles/globals.scss";
import ScrollToTop from "react-scroll-to-top";
// components
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ScrollToTop smooth top={200} color="#111" />
    </>
  );
}

export default MyApp;
