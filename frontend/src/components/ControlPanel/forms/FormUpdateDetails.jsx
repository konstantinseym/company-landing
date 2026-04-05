import { useState } from "react";
import styles from "./Forms.module.css";

export default function FormUpdateDetails({ details }) {
  const [formData, setFormData] = useState(details);

  const [isLoading, setisLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Редактировать реквизиты</h2>
      {details.map((detailsString, index) => (
          <input
            value={detailsString}
            onChange={(e) => setFormData()}
            type="text"
            className={styles.text}
          />
      ))}
      <input type="button" className={styles.button} value={"Добавить поле"} />
      <input
        type="submit"
        className={styles.button}
        value={"Сохранить"}
        disabled={isLoading}
      />
    </form>
  );
}
