import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.page}>
      <Layout name="Me contacter">
        <div className={styles.contact}>
          <h1>Me contacter</h1>
        </div>
        <div>
          <form className={styles.container} onSubmit={handleSubmit}>
            <label className={styles.label}>
              {" "}
              Votre Nom
              <input
                className={styles.input}
                value={name}
                type="text"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            <label className={styles.label}>
              {" "}
              Votre Email
              <input
                className={styles.input}
                value={email}
                type="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => e.preventDefault(console.log(email, name))}
            >
              Valider
            </button>
          </form>
        </div>
      </Layout>{" "}
    </div>
  );
}
