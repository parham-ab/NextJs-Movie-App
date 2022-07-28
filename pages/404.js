import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
// img
import error from "../public/img/404.svg";
// components
import LayOut from "../components/common/LayOut";

const NotFound = () => {
  return (
    <LayOut
      title={"Page Not Found | 404"}
      keywords={"movie"}
      description={"made with ❤ by Parham Abolghasemi"}
    >
      <div style={{ width: "500px" }} className="mx-auto mt-5 mb-5 img-fluid">
        <Image src={error} alt="MovieMan" />
      </div>

      <div className="d-flex justify-content-center">
        <Button variant="success">
          <Link href="/">Home Page</Link>
        </Button>
      </div>
    </LayOut>
  );
};

export default NotFound;
