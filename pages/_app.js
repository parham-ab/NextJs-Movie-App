// scroll to top
import ScrollToTop from "react-scroll-to-top";
// styles
import "../styles/index.scss";
// components
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

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
