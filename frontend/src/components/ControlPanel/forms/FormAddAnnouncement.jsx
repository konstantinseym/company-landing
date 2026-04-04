import styles from "./Forms.module.css";
import { addAnnouncement } from "../api/addannouncement.js";
import { useState } from "react";

export default function FormAddAnnouncement({ handleAddAnnouncement }) {
  const [formValue, setFormValue] = useState({
    caption: "",
    content: "",
  });
  const [isLoading, setisLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setisLoading(true);
    const response = await addAnnouncement(formValue);
    if (response.status === 201) {
      setFormValue({ caption: "", content: "" });
      setisLoading(false);
      handleAddAnnouncement();
    } else {
      alert("Что-то пошло не так...");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Добавить объявление</h2>
      <input
        type="text"
        className={styles.text}
        placeholder="Заголовок"
        value={formValue.caption}
        onChange={(e) =>
          setFormValue({ ...formValue, caption: e.target.value })
        }
      />
      <textarea
        className={styles.textarea}
        placeholder="Текст"
        value={formValue.content}
        onChange={(e) =>
          setFormValue({ ...formValue, content: e.target.value })
        }
      />
      <input
        type="submit"
        className={styles.button}
        value={"Добавить"}
        disabled={isLoading}
      />
    </form>
  );
}
