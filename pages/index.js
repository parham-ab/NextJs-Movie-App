import Image from "next/image";
import LayOut from "../components/LayOut";
import { Button } from "react-bootstrap";
// img
import movieMan from "../public/img/movieMan.svg";

const Home = () => {
  return (
    <LayOut
      title={"Movie App"}
      keywords={"movie"}
      description={"made with ❤ by Parham Abolghasemi"}
    >
      <div style={{ width: "300px" }} className="mx-auto mt-5 mb-5 img-fluid">
        <Image src={movieMan} alt="MovieMan" />
      </div>

      <div className="d-flex flex-column align-items-center">
        <h1>Welcome to Movie App</h1>
        <p>Produce Films feature, TV & Game.</p>
        <a href="https://parham-portfolio.netlify.app/" target={"_blank"}>
          <Button variant="secondary">Contact Us</Button>
        </a>
      </div>
    </LayOut>
  );
};

export default Home;
