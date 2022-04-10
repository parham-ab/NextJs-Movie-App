import React from "react";
import Image from "next/image";
// img
import error from "../public/img/404.svg";

const NotFound = () => {
  return (
    <div>
      <div style={{ width: "500px" }} className="mx-auto mt-5 mb-5 img-fluid">
        <Image src={error} alt="MovieMan" />
      </div>
    </div>
  );
};

export default NotFound;
