import { useState } from "react";

import { deleteAnnouncement } from "../api/deleteannouncement.js";
import { formatDate } from "../../../utils/formatDate.js";

import styles from "../ControlPanel.module.css";

export default function FormDeleteAnnouncement({
  news,
  handleDeleteAnnouncement,
}) {
  const [deletingId, setDeletingId] = useState(null);

  async function handleDelete(id) {
    if (deletingId !== null) {
      return;
    }

    try {
      setDeletingId(id);
      await deleteAnnouncement(id);
      handleDeleteAnnouncement?.();
    } catch (err) {
      console.log(err);
      alert("Ошибка");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <form className={styles.form}>
      <h2 className={styles.caption}>Удалить объявление</h2>

      {news.length === 0 ? (
        <p className={styles.pgph}>Объявлений пока нет</p>
      ) : (
        news.map((newsItem) => {
          const isCurrentItemDeleting = deletingId === newsItem.id;
          const isAnyItemDeleting = deletingId !== null;

          return (
            <div key={newsItem.id} className={styles.flexcontainer}>
              <p className={styles.pgph}>Название записи: {newsItem.title}</p>
              <p className={styles.pgph}>
                Дата добавления записи: {formatDate(newsItem.date)}
              </p>
              <input
                className={[styles.button, styles.buttonred].join(" ")}
                type="button"
                value={isCurrentItemDeleting ? "..." : "-"}
                onClick={() => handleDelete(newsItem.id)}
                disabled={isAnyItemDeleting}
              />
            </div>
          );
        })
      )}
    </form>
  );
}
