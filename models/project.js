import connection from "../db-config";

export async function getProjects() {
  return connection
    .promise()
    .query("SELECT * FROM Projects")
    .then((result) => {
      return result[0];
    });
}
