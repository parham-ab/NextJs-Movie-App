// components
import PopularMovie from "@/components/PopularMovie";
// hooks
import UseHead from "@/components/common/hooks/UseHead";
import { http } from "services/httpService";

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
  const response = await http.get(`/k_atj5j89x`);
  const popular = response.data;
  return {
    props: { popular },
  };
}

export default Popular;