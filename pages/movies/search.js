// hooks
import UseHead from "@/components/common/hooks/UseHead";
// components
import SearchedMovie from "@/components/SearchedMovie";

const Search = () => {
  return (
    <>
      <UseHead
        title={"Search - Movies"}
        description={"search tour favorite movies"}
        keywords={"search for a movie"}
      />
      <SearchedMovie />
    </>
  );
};

export default Search;
