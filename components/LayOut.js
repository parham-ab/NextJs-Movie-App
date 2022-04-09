import React from "react";
import Head from "next/head";

const LayOut = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </div>
  );
};
LayOut.defaultProps = {
  title: "",
  description: "",
  keywords: "",
  keywords: "",
  keywords: "",
};
export default LayOut;
