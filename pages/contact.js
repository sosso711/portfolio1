import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className={styles.page}>
      <Layout name="Me contacter">
        <div className={styles.contact}>
          <h1>Me contacter</h1>
          <form
            className={styles.container}
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .post("/api/contactRequests", {
                  email,
                  message,
                })

                .then((result) => {
                  alert("Merci de nous recontacter");
                  setEmail("");
                  setMessage("");
                });
            }}
          >
            <label className={styles.label}>
              {" "}
              Votre Email
              <input
                className={styles.input}
                value={email}
                type="email"
                required="required"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label className={styles.label}>
              {" "}
              Votre Message
              <input
                className={styles.message}
                value={message}
                type="text"
                required="required"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </label>
            <button className={styles.button} type="submit">
              Valider
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
}
