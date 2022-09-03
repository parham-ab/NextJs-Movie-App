import Image from "next/image";
import axios from "axios";
import { Button } from "react-bootstrap";
// components
import PopularMovie from "../components/PopularMovie";
import LayOut from "../components/common/LayOut";
// img
import movieMan from "../public/img/movieMan.svg";

const Home = ({ movies }) => {
  return (
    <>
      <div style={{ width: "300px" }} className="mx-auto mt-5 mb-5 img-fluid">
        <Image src={movieMan} alt="MovieMan" loading="lazy" />
      </div>

      <div className="d-flex flex-column align-items-center">
        <h1>Welcome to Movie App</h1>
        <p>Produce Films feature, TV & Game.</p>
        <a
          href="https://parham-portfolio.netlify.app/#contact"
          target={"_blank"}
          rel="noreferrer"
        >
          <Button variant="secondary" className="mb-5">
            Contact Us
          </Button>
        </a>
      </div>
      <PopularMovie movies={movies} />
    </>
  );
};

export async function getStaticProps() {
  const response = await axios.get(
    `https://imdb-api.com/en/API/Top250Movies/k_atj5j89x`
  );
  const movies = response.data;
  return {
    props: { movies },
  };
}

export default Home;
