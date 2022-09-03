import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import {
  FormControl,
  InputGroup,
  Button,
  Form,
  Toast,
  ToastContainer,
  Badge,
} from "react-bootstrap";
// img
import movieMan2 from "../public/img/movieMan2.svg";
// components
import SearchContent from "./SearchContent";
// icons
import { BsSearch } from "react-icons/bs";

const SearchedMovie = () => {
  const [title, setTitle] = useState("");
  const [val, setVal] = useState([]);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  const submitHandler = async (e) => {
    e.preventDefault();
    const getData = async () => {
      setLoading(true);
      const response = await axios
        .get(`https://imdb-api.com/en/API/SearchAll/k_atj5j89x/${title}`)
        .catch((error) => setErrors(error));
      if (response.data !== undefined) setVal(response.data.results);
      setErrors(response.data.errorMessage);
      // clear input
      setTitle("");
    };
    getData();
  };

  return (
    <>
      {errors && (
        <ToastContainer position="top-center" className="pt-5">
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <strong className="me-auto">
                <Badge bg="danger"> </Badge> Error <Badge bg="danger"> </Badge>
              </strong>
            </Toast.Header>
            <Toast.Body>Not Found 😥 !</Toast.Body>
          </Toast>
        </ToastContainer>
      )}

      <Form
        className="d-flex justify-content-center mt-5"
        onSubmit={submitHandler}
      >
        <InputGroup className="mb-3 mt-5 shadow" style={{ width: "280px" }}>
          <FormControl
            placeholder="Search..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button
            disabled={title && !title.startsWith(" ") ? false : true}
            type="submit"
            variant="outline-secondary"
            id="button-addon0"
          >
            <BsSearch />
          </Button>
        </InputGroup>
      </Form>
      <div className="d-flex flex-column justify-content-center mt-5">
        <Image
          src={movieMan2}
          width={"290px"}
          height={"290px"}
          layout="intrinsic"
          priority={1}
        />
        <p className="text-primary mt-2 text-center">
          Search for a movie, keyword or something else...
        </p>
      </div>
      <SearchContent result={val} />
    </>
  );
};

export default SearchedMovie;