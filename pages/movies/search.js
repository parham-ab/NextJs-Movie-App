import LayOut from "../../components/LayOut";
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
