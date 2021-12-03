import next from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="/admin/projets">
        <a>Admin</a>
      </Link>
    </div>
  );
}
