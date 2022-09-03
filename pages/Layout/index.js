// components
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";

const LayOut = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayOut;
