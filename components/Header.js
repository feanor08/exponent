import Link from "next/link";
import Image from 'next/image'
import styles from "@/styles/Header.module.css";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter()
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
        <Image className={styles.logoImage} src="/Group 24.svg" width="259px" height="42px" onClick={()=>{router.push("/")}}/>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/team">
              TEAM
            </Link>
          </li>
          <li>
            <Link href="/about">
              ABOUT US
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
