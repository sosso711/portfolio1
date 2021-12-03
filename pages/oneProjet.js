import Layout from "../components/Layout";
import { getOneProject } from "../models/project";

export default function oneProject({ oneProject }) {
  return (
    <div>
      <Layout name={project.title}>
        <ul>
          {oneProject.map((project) => {
            return (
              <li>
                <h1>{project.title}</h1>
                <img src={project.mainPictureUrl} />
                <p>{project.description}</p>
              </li>
            );
          })}
        </ul>
      </Layout>
    </div>
  );
}
export async function getStaticProps() {
  const oneProject = await getOneProject();
  return {
    props: {
      oneProject,
    },
  };
}
