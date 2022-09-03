import axios from "axios";
// components
import PopularMovie from "@/components/PopularMovie";
// hooks
import UseHead from "@/components/common/hooks/UseHead";

const Popular = ({ popular }) => {
  return (
    <>
      <UseHead
        title={"Top Popular - Movies"}
        description={"top popular world movies"}
        keywords={"popular"}
      />
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
