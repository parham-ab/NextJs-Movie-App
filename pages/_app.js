// scroll to top
import ScrollToTop from "react-scroll-to-top";
// styles
import "@/styles/index.scss";
// layout
import LayOut from "@/components/common/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <LayOut>
      <Component {...pageProps} />
      <ScrollToTop smooth top={200} color="#111" />
    </LayOut>
  );
}

export default MyApp;