import axios from "axios";
// components
import PopularMovie from "../../components/PopularMovie";

const Popular = ({ popular }) => {
  return (
    <>
      <PopularMovie movies={popular} />
    </>
  );
};

export async function getStaticProps() {
  const response = await axios.get(
    `https://imdb-api.com/en/API/MostPopularMovies/k_atj5j89x`
  );
  const popular = response.data;
  return {
    props: { popular },
  };
}

export default Popular;
