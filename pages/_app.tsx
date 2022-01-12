import type { AppProps } from "next/app";
import { Layout } from "antd";
import Navbar from "layout/Navbar";
import Footer from "layout/Footer";
import "antd/dist/antd.css";
import "antd-css-utilities/utility.min.css";
import "../internationalization";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getLocalStorage } from "utils/localStorage";

function MyApp({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();
  const [initialized, setInitialized] = useState(false);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    if (!initialized) {
      changeLanguage(getLocalStorage("language") || "en");
      setInitialized(true);
    }
  }, []);
  
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
