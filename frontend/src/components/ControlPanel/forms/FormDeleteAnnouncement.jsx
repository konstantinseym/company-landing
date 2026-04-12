import styles from "../ControlPanel.module.css";
import { useState } from "react";
import { deleteAnnouncement } from "../api/deleteannouncement";

export default function FormDeleteAnnouncement({
  news,
  handleDeleteAnnouncement,
}) {
  const [isLoading, setisLoading] = useState(false);

  async function handleDeleteButton(id) {
    setisLoading(true);
    const response = await deleteAnnouncement(id);
    if (response.status === 200) {
      setisLoading(false);
      handleDeleteAnnouncement();
    } else {
      alert("Что-то пошло не так...");
    }
  }

  return (
    <form className={styles.form}>
      <h2 className={styles.caption}>Удалить объявление</h2>
      {news.map((newsItem) => (
        <div key={newsItem.id}>
          <p className={styles.pgph}>Название записи: {newsItem.title}</p>
          <p className={styles.pgph}>Дата добавления записи: {newsItem.date}</p>
          <input
            className={[styles.button, styles.buttonred].join(" ")}
            type="button"
            value="-"
            onClick={() => handleDeleteButton(newsItem.id)}
            disabled={isLoading}
          />
        </div>
      ))}
    </form>
  );
}
