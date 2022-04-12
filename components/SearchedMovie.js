import React, { useState } from "react";
import { FormControl, InputGroup, Button, Form } from "react-bootstrap";
// icons
import { BsSearch } from "react-icons/bs";

const SearchedMovie = () => {
  const [title, setTitle] = useState("");
  const [val, setVal] = useState([]);

  const submitHandler = async () => {
    const getData = async () => {
      const response = `https://imdb-api.com/en/API/SearchAll/k_atj5j89x${title}`;
      // const
    };
  };

  return (
    <Form className="d-flex justify-content-center" onSubmit={submitHandler}>
      <InputGroup className="mb-3 mt-5 shadow" style={{ width: "280px" }}>
        <FormControl
          placeholder="Search..."
          aria-label="search"
          aria-describedby="basic-addon0"
        />
        <Button variant="outline-secondary" id="button-addon0">
          <BsSearch />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchedMovie;
