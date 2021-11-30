import next from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import myImage from "/public/images/myImage.jpeg";
import Link from "next/link";
import Project from "./project";

export default function Home() {
  return (
    <div className="">
      <h1 className={styles.title}>Bienvenue sur mon Portfolio</h1>

      <ul>
        <li>
          <Link href="/project">
            <a>Mes réalisations</a>
          </Link>
        </li>
      </ul>

      <Image
        src={myImage}
        // height="150px"
        // width="150px"
        layout="responsive"
        alt="mon image"
      />
      <p className={styles.description}>
        Lorem ipsum dolor sit amet. Et optio sint quo accusantium dolorem sed
        nemo eligendi. Aut voluptatibus voluptates ea ratione earum aut eaque At
        ratione dicta qui ipsa dolores sed dolorem voluptatem. Rem blanditiis
        sunt At dolores provident ut animi voluptatem in obcaecati laborum quo
        incidunt veniam sit voluptatum illum quo asperiores. Et sunt suscipit
        non sunt minus quo consequatur dolorem aut consequatur assumenda est
        laboriosam rerum est eveniet provident est neque molestiae. Qui ipsum
        nulla ut dolores dicta et quod quae hic mollitia modi ex similique
        tempora. Et molestias recusandae ea facilis iure vel quis dolor! Est
        quia internos et repudiandae pariatur quo minus nihil quo commodi
        consequuntur sed consequatur voluptate quo molestiae esse et dolorem
        nostrum! Id vero quos qui voluptates voluptatem et minima tenetur. Qui
        corporis maiores aut laboriosam rerum cum labore rerum eum quisquam
        ratione et possimus illo est ipsam voluptas qui enim excepturi!
      </p>
    </div>
  );
}
