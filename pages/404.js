import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
// img
import error from "../public/img/404.svg";

const NotFound = () => {
  return (
    <>
      <div style={{ width: "500px" }} className="mx-auto mt-5 mb-5 img-fluid">
        <Image src={error} alt="MovieMan" />
      </div>

      <div className="d-flex justify-content-center">
        <Button variant="success">
          <Link href="/">Home Page</Link>
        </Button>
      </div>
    </>
  );
};

export default NotFound;
