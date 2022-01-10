import { Fragment } from "react";
import Head from "next/head";
import List from "./List";

const { APP_DOMAIN } = process.env;

const Index = () => (
  <Fragment>
    <Head>
      <title>BNC Front End Web Engineer Technical Test</title>

      <meta name="title" content="BNC Front End Web Engineer Technical Test" />
      <meta
        name="description"
        content="BNC Front End Web Engineer Technical Test"
      />
      <meta name="language" content="English" />

      <meta
        property="og:title"
        content="BNC Front End Web Engineer Technical Test"
      />
      <meta property="og:url" content={APP_DOMAIN} />
      <meta
        property="og:description"
        content="BNC Front End Web Engineer Technical Test"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${APP_DOMAIN}/logo.png`} />
    </Head>

    <List />
  </Fragment>
);

export default Index;
