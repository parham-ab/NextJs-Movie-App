import Head from "next/head";

const UseHead = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/img/movieMan.svg" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};

export default UseHead;