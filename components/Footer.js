import Link from "next/link";
import styles from "@/styles/Footer.module.css";
import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; EXPONENT {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
