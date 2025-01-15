<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
=======
import { useState } from "react";
>>>>>>> 04b9134b05de2fbf126ba17a93fb22e1afedd3ff
import styles from "./Login.module.css";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

<<<<<<< HEAD
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleSubmit}>
=======
  return (
    <main className={styles.login}>
      <form className={styles.form}>
>>>>>>> 04b9134b05de2fbf126ba17a93fb22e1afedd3ff
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
<<<<<<< HEAD
          <Button type="primary">Login</Button>
=======
          <button>Login</button>
>>>>>>> 04b9134b05de2fbf126ba17a93fb22e1afedd3ff
        </div>
      </form>
    </main>
  );
}
