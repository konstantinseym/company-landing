import styles from "./Forms.module.css";
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
      <h2>Удалить объявление</h2>
      <ul className="list">
        {news.map((newsItem) => (
          <li className={styles.listitem} key={newsItem.id}>
            <p>Название записи: {newsItem.title}</p>
            <p>Дата добавления записи: {newsItem.date}</p>
            <input
              className={styles.button}
              type="button"
              value="Удалить"
              onClick={() => handleDeleteButton(newsItem.id)}
              disabled={isLoading}
            />
          </li>
        ))}
      </ul>
    </form>
  );
}
