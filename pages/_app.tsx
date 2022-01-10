import type { AppProps } from "next/app";
import { Layout } from "antd";
import Navbar from "layout/Navbar";
import Footer from "layout/Footer";
import "antd/dist/antd.css";
import "antd-css-utilities/utility.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <Layout.Content className="px-10 pa-10 mt-10">
        <Component {...pageProps} />
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default MyApp;
