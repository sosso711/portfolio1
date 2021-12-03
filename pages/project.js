import next from "next";
import Layout from "../components/Layout";
import { getProjects } from "/models/project";
import styles from "../styles/Home.module.css";
// import Image from "next/image";
import Link from "next/link";

export default function Project({ projects }) {
  return (
    <div>
      <Layout name="Mes réalisation">
        <h1 className={styles.projectTitle}>Mes réalisations</h1>
        <ul className={styles.projectdiv}>
          {projects.map((data) => {
            return (
              <Link href={`/projets/${data.id}`}>
                <a>
                  <li className={styles.projects}>
                    <h2 className={styles.projecth2}>{data.title}</h2>
                    <img
                      src={data.mainPictureUrl}
                      width="100%"
                      height="100%"
                      layout="responsive"
                    />
                    <p>{data.description}</p>
                  </li>
                </a>
              </Link>
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

/* export async function getStaticPaths() {
  const res = await fetch('./oneProjects')
  const posts = await res.json() */
