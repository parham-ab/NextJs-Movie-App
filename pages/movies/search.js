import LayOut from "../../components/common/LayOut";
// components
import SearchedMovie from "../../components/SearchedMovie";

const Search = () => {
  return (
    <LayOut
      title={"Movie App | Search"}
      keywords={"search"}
      description={"made with ❤ by Parham Abolghasemi"}
    >
      <SearchedMovie />
    </LayOut>
  );
};

export default Search;
