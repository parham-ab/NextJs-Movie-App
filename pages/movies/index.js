import axios from "axios";
// components
import LayOut from "../../components/LayOut";
import PopularMovie from "../../components/PopularMovie";

const Popular = ({ popular }) => {
  return (
    <LayOut
      title={"Movie App | Popular"}
      keywords={"movie"}
      description={"made with ❤ by Parham Abolghasemi"}
    >
      <PopularMovie movies={popular} />
    </LayOut>
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
