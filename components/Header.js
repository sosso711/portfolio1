import Link from "next/link";
import next from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Header({ name }) {
  return (
    <div className={styles.headerDiv}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">
            <a className={styles.buttons} layout="responsive">
              Accueil
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/contact">
            <a className={styles.buttons} layout="responsive">
              Mes contacts
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/project">
            <a className={styles.buttons} layout="responsive">
              Mes réalisations
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
