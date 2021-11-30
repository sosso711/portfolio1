import next from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <Layout name="Me contacter">
      <div className={styles.contact}>
        <h1>Me contacter</h1>
      </div>
    </Layout>
  );
}
