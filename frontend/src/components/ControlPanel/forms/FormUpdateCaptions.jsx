import { useState } from "react";
import { updateCaptions } from "../api/updatecaptions.js";
import styles from "../ControlPanel.module.css";

export default function FormUpdateCaptions({ captions }) {
  const [formData, setFormData] = useState(captions),
    [isLoading, setisLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setisLoading(true);
    const response = await updateCaptions(formData);
    if (response.status === 200) {
      setisLoading(false);
    } else {
      alert("Что-то пошло не так...");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.caption}>Редактировать заголовки</h2>
      <label className={styles.formlabel}>
        Заголовок ({formData.heroMajor.length} / 64)
        <input
          type="text"
          className={styles.text}
          placeholder="Заголовок"
          maxLength={64}
          value={formData.heroMajor}
          onChange={(e) =>
            setFormData({ ...formData, heroMajor: e.target.value })
          }
        />
      </label>
      <label className={styles.formlabel}>
        Подзаголовок ({formData.heroMinor.length} / 128)
        <input
          type="text"
          className={styles.text}
          placeholder="Подзаголовок"
          maxLength={128}
          value={formData.heroMinor}
          onChange={(e) =>
            setFormData({ ...formData, heroMinor: e.target.value })
          }
        />
      </label>
      <label className={styles.formlabel}>
        Публикации ({formData.newsCaption.length} / 32)
        <input
          type="text"
          className={styles.text}
          placeholder="Публикации"
          maxLength={32}
          value={formData.newsCaption}
          onChange={(e) =>
            setFormData({ ...formData, newsCaption: e.target.value })
          }
        />
      </label>
      <label className={styles.formlabel}>
        Сотрудники ({formData.employeesCaption.length} / 32)
        <input
          type="text"
          className={styles.text}
          placeholder="Сотрудники"
          maxLength={32}
          value={formData.employeesCaption}
          onChange={(e) => {
            setFormData({ ...formData, employeesCaption: e.target.value });
          }}
        />
      </label>
      <label className={styles.formlabel}>
        Реквизиты ({formData.detailsCaption.length} / 32)
        <input
          type="text"
          className={styles.text}
          placeholder="Реквизиты"
          maxLength={32}
          value={formData.detailsCaption}
          onChange={(e) =>
            setFormData({ ...formData, detailsCaption: e.target.value })
          }
        />
      </label>
      <label className={styles.formlabel}>
        Контакты ({formData.contactsCaption.length} / 32)
        <input
          type="text"
          className={styles.text}
          placeholder="Контакты"
          maxLength={32}
          value={formData.contactsCaption}
          onChange={(e) =>
            setFormData({ ...formData, contactsCaption: e.target.value })
          }
        />
      </label>
      <input
        type="submit"
        className={styles.button}
        value={"Сохранить"}
        disabled={isLoading}
      />
    </form>
  );
}
