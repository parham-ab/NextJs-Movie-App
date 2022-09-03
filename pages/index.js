import { http } from "services/httpService";
import Image from "next/image";
import { Button } from "react-bootstrap";
// components
import PopularMovie from "@/components/PopularMovie";
// hooks
import UseHead from "@/components/common/hooks/UseHead";
// img
import movieMan from "../public/img/movieMan.svg";

const Home = ({ movies }) => {
  return (
    <>
      <UseHead
        title={"Top 250 - Movies"}
        description={"top 250 popular movies"}
        keywords={"imdb"}
      />
      <div style={{ width: "300px" }} className="mx-auto mt-5 mb-5 img-fluid">
        <Image src={movieMan} alt="MovieMan" loading="lazy" />
      </div>

      <div className="d-flex flex-column align-items-center">
        <h1>Welcome to Movie App</h1>
        <p>Produce Films feature, TV & Game.</p>
        <a
          href="https://parham-ab.netlify.app/#contact"
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
  const response = await http.get(`/k_atj5j89x`);
  const movies = response.data;
  return {
    props: { movies },
  };
}

export default Home;
