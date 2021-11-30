import next from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <Layout>
        <h1>Me contacter</h1>
      </Layout>
    </div>
  );
}
