import { FaExclamationTriangle } from "react-icons/fa";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import Link from "next/link";
const NotFound = () => {
  return (
    <Layout>
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
           {' '}404
        </h1>
        <h3>Sorry, this page doesn't exist.</h3>
        <Link href="/">Back to Home</Link>
      </div>
    </Layout>
  );
};

export default NotFound;
