import Head from "next/head";
import Script from "next/script";

const Meta = ({ title, description, keywords }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta charSet="utf-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://use.fontawesome.com/releases/v5.15.3/js/all.js"
        crossOrigin="anonymous"
      />
    </div>
  );
};

Meta.defaultProps = {
  title: "ACME App ",
  description: "Easily ...",
  keywords: "...",
};

export default Meta;
