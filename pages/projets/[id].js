import Layout from "../../components/Layout";
import { getOneProject, getProjects } from "../../models/project";

export default function oneProject({ oneProject }) {
  return (
    <div>
      <Layout name="project">
        <h1>{oneProject.title}</h1>
        <img src={oneProject.mainPictureUrl} />
        <p>{oneProject.description}</p>
      </Layout>
    </div>
  );
}
export async function getStaticProps(context) {
  const oneProject = await getOneProject(context.params.id);
  return {
    props: {
      oneProject,
    },
  };
}
export async function getStaticPaths() {
  const project = await getProjects();
  return {
    paths: project.map((a) => {
      return { params: { id: a.id.toString() } };
    }),
    fallback: "blocking",
  };
}
