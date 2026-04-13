import styles from "../ControlPanel.module.css";
import { useState } from "react";
import { updateContacts } from "../api/updateContacts.js";

export default function FormUpdateContacts({ contacts }) {
  const [formData, setFormData] = useState(contacts),
    [isLoading, setisLoading] = useState(false);

  function addField() {
    setFormData((prev) => ({
      ...prev,
      minorCaptions: [...prev.minorCaptions, { id: Date.now(), value: "" }],
    }));
  }

  function deleteField(id) {
    setFormData((prev) => ({
      ...prev,
      minorCaptions: prev.minorCaptions.filter((item) => item.id !== id),
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setisLoading(true);
    const response = await updateContacts(formData);
    if ((response.status === 200)) {
      setisLoading(false);
    } else {
      alert("Что-то пошло не так...");
    }
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.caption}>Редактировать контакты</h2>
      <h3>Основное поле</h3>
      <p className={styles.pgph}>{formData.majorCaption.length} / 64</p>
      <input
        type="text"
        className={styles.text}
        maxLength={64}
        value={formData.majorCaption}
        onChange={(e) =>
          setFormData({ ...formData, majorCaption: e.target.value })
        }
      />
      <h3>Дополнительные поля</h3>
      {formData.minorCaptions.map((caption) => (
        <div key={caption.id}>
          <p className={styles.pgph}>{caption.value.length} / 96</p>
          <input
            type="text"
            className={styles.text}
            maxLength={96}
            value={caption.value}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                minorCaptions: prev.minorCaptions.map((item) =>
                  item.id === caption.id
                    ? { ...item, value: e.target.value }
                    : item,
                ),
              }))
            }
          />
          <input
            type="button"
            value="-"
            className={[styles.button, styles.buttonred].join(" ")}
            onClick={() => deleteField(caption.id)}
          />
        </div>
      ))}
      <input
        type="button"
        className={styles.button}
        value={"Добавить поле"}
        onClick={addField}
        disabled={isLoading}
      />
      <input
        type="submit"
        className={styles.button}
        value="Сохранить"
        disabled={isLoading}
      />
    </form>
  );
}
