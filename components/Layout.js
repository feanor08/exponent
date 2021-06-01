import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";
const Layout = ({ title, description, keywords, children }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon"  href="http://www.exponent.energy/mini_logo.png" />
        <meta description={description} content={keywords} />
      </Head>
      <div className={styles.container}>
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Exponent",
  description:
    "Find the latest EV charging infrastructure, at affordable rates.",
  keywords: "ev,charging,e20,ather",
};
export default Layout;
