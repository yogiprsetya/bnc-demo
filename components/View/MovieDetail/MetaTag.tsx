import { ReactElement } from "react";
import Head from "next/head";
const { APP_DOMAIN } = process.env;

type propsType = {
  title: string;
  description: string;
  cover: string;
};

const Header = (props: propsType): ReactElement => (
  <Head>
    <title>{props.title}</title>
    <meta name="title" content={props.title} />
    <meta name="description" content={props.description} />
    <meta name="language" content="English" />
    <meta property="og:title" content={props.description} />
    <meta property="og:url" content={APP_DOMAIN} />
    <meta property="og:description" content={props.description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={props.cover} />
  </Head>
);

export default Header;
