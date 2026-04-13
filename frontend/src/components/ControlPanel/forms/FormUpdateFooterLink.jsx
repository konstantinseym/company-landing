import styles from "../ControlPanel.module.css";
import { useState } from "react";
import { updateFooterLink } from "../api/updateFooterLink.js";

export default function FormUpdateFooterLink({ link }) {
  const [formData, setFormData] = useState(link),
    [isLoading, setisLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setisLoading(true);
    const response = await updateFooterLink(formData);
    if (response.status === 200) {
      setisLoading(false);
    } else {
      alert("Что-то пошло не так...");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.caption}>Редактировать ссылку в подвале</h2>
      <label className={styles.formlabel}>
        URL
        <input
          type="text"
          className={styles.text}
          placeholder="URL"
          maxLength={2048}
          value={formData.link}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
        />
      </label>
      <label className={styles.formlabel}>
        Текст ({formData.caption.length} / 256)
        <input
          type="text"
          className={styles.text}
          placeholder="Текст"
          maxLength={256}
          value={formData.caption}
          onChange={(e) =>
            setFormData({ ...formData, caption: e.target.value })
          }
        />
      </label>
      <input
        type="submit"
        className={styles.button}
        value="Сохранить"
        disabled={isLoading}
      />
    </form>
  );
}
