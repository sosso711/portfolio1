import next from "next";
import Layout from "../components/Layout";
import { getProjects } from "/models/project";
import styles from "../styles/Home.module.css";
// import Image from "next/image";

export default function Project({ projects }) {
  return (
    <div>
      <Layout name="Mes réalisation">
        <h1 className={styles.projectTitle}>Mes réalisations</h1>
        <ul className={styles.projectdiv}>
          {projects.map((data) => {
            return (
              <li className={styles.projects}>
                <h2>{data.title}</h2>
                <img
                  src={data.mainPictureUrl}
                  width="250px"
                  height="auto"
                  layout="responsive"
                />
                <p>{data.description}</p>
              </li>
            );
          })}
        </ul>
      </Layout>
    </div>
  );
}
export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
}
