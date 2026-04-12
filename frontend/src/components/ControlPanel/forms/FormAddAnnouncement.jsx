import styles from "../ControlPanel.module.css";
import { addAnnouncement } from "../api/addannouncement.js";
import { useState } from "react";

const INITIAL_FORM_STATE = {
  caption: "",
  content: "",
};

const VALIDATION_RULES = {
  captionMin: 5,
  captionMax: 128,
  contentMin: 5,
  contentMax: 5000,
};

export default function FormAddAnnouncement({ handleAddAnnouncement }) {
  const [formValue, setFormValue] = useState(INITIAL_FORM_STATE);
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  }

  function validateForm(values) {
    const caption = values.caption.trim();
    const content = values.content.trim();

    if (!caption || !content) {
      return "Все поля должны быть заполнены";
    }

    if (caption.length < VALIDATION_RULES.captionMin) {
      return (
        "Заголовок должен быть больше " +
        VALIDATION_RULES.captionMin +
        " символов."
      );
    }

    if (caption.length > VALIDATION_RULES.captionMax) {
      return (
        "Заголовок должен быть меньше " +
        VALIDATION_RULES.captionMax +
        " символов."
      );
    }

    if (content.length < VALIDATION_RULES.contentMin) {
      return (
        "Текст должен быть больше " + VALIDATION_RULES.contentMin + " символов"
      );
    }
    if (content.length > VALIDATION_RULES.contentMax) {
      return (
        "Текст должен быть меньше " + VALIDATION_RULES.contentMax + " символов"
      );
    }

    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const normalizedData = {
      caption: formValue.caption.trim(),
      content: formValue.content.trim(),
    };

    const validationError = validateForm(normalizedData);
    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      setIsLoading(true);
      await addAnnouncement(normalizedData);
      setFormValue(INITIAL_FORM_STATE);
      handleAddAnnouncement();
    } catch (err) {
      console.log(err);
      alert("Ошибка");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.caption}>Добавить объявление</h2>
      <p className={styles.pgph}>{formValue.caption.length} / 128</p>
      <input
        type="text"
        name="caption"
        className={styles.text}
        placeholder="Заголовок"
        maxLength={VALIDATION_RULES.captionMax}
        value={formValue.caption}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <textarea
        name="content"
        className={styles.textarea}
        placeholder="Текст"
        maxLength={VALIDATION_RULES.contentMax}
        value={formValue.content}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <input
        type="submit"
        className={styles.button}
        value={isLoading ? "Добавление" : "Добавить"}
        disabled={isLoading}
      />
    </form>
  );
}
