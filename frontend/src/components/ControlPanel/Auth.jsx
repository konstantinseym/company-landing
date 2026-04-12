import styles from "./ControlPanel.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    await axios.post(
      "/api/login",
      { password: passwordInputValue },
      { withCredentials: true },
    );
    navigate("/controlpanel");
  }

  return (
    <main className={styles.maincontainer}>
      <form
      className={styles.form}
        onSubmit={handleLogin}
      >
        <h2 className={styles.caption}>введите пароль</h2>
        <input
          type="password"
          className={styles.text}
          value={passwordInputValue}
          onChange={(e) => setPasswordInputValue(e.target.value)}
        />
        <input type="submit" className={styles.button} value={"войти"} />
      </form>
    </main>
  );
}
