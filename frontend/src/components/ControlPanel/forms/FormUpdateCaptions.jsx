import { useState } from "react";

import { CAPTIONS_VALIDATION_RULES } from "../validation/validationrules.js";
import { updateCaptions } from "../api/updateCaptions.js";
import { validateFormUpdateCaptions } from "../validation/validationForms.js";

import styles from "../ControlPanel.module.css";

export default function FormUpdateCaptions({ captions }) {
  const [formValue, setFormValue] = useState(captions);
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const normalizedData = {
      heroMajor: formValue.heroMajor.trim(),
      heroMinor: formValue.heroMinor.trim(),
      newsCaption: formValue.newsCaption.trim(),
      employeesCaption: formValue.employeesCaption.trim(),
      detailsCaption: formValue.detailsCaption.trim(),
      contactsCaption: formValue.contactsCaption.trim(),
    };

    const validationError = validateFormUpdateCaptions(normalizedData);
    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      setIsLoading(true);
      await updateCaptions(normalizedData);
    } catch (err) {
      console.log(err);
      alert("Ошибка");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.caption}>Редактировать заголовки</h2>
      <label className={styles.formlabel}>
        Заголовок ({formValue.heroMajor.length} /{" "}
        {CAPTIONS_VALIDATION_RULES.heroMajorMax})
        <input
          type="text"
          name="heroMajor"
          className={styles.text}
          placeholder="Заголовок"
          maxLength={CAPTIONS_VALIDATION_RULES.heroMajorMax}
          value={formValue.heroMajor}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </label>
      <label className={styles.formlabel}>
        Подзаголовок ({formValue.heroMinor.length} /{" "}
        {CAPTIONS_VALIDATION_RULES.heroMinorMax})
        <input
          type="text"
          name="heroMinor"
          className={styles.text}
          placeholder="Подзаголовок"
          maxLength={CAPTIONS_VALIDATION_RULES.heroMinorMax}
          value={formValue.heroMinor}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </label>
      <label className={styles.formlabel}>
        Публикации ({formValue.newsCaption.length} /{" "}
        {CAPTIONS_VALIDATION_RULES.newsCaptionMax})
        <input
          type="text"
          name="newsCaption"
          className={styles.text}
          placeholder="Публикации"
          maxLength={CAPTIONS_VALIDATION_RULES.newsCaptionMax}
          value={formValue.newsCaption}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </label>
      <label className={styles.formlabel}>
        Сотрудники ({formValue.employeesCaption.length} /{" "}
        {CAPTIONS_VALIDATION_RULES.employeesCaptionMax})
        <input
          type="text"
          name="employeesCaption"
          className={styles.text}
          placeholder="Сотрудники"
          maxLength={CAPTIONS_VALIDATION_RULES.employeesCaptionMax}
          value={formValue.employeesCaption}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </label>
      <label className={styles.formlabel}>
        Реквизиты ({formValue.detailsCaption.length} /{" "}
        {CAPTIONS_VALIDATION_RULES.detailsCaptionMax})
        <input
          type="text"
          name="detailsCaption"
          className={styles.text}
          placeholder="Реквизиты"
          maxLength={CAPTIONS_VALIDATION_RULES.detailsCaptionMax}
          value={formValue.detailsCaption}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </label>
      <label className={styles.formlabel}>
        Контакты ({formValue.contactsCaption.length} /{" "}
        {CAPTIONS_VALIDATION_RULES.contactsCaptionMax})
        <input
          type="text"
          name="contactsCaption"
          className={styles.text}
          placeholder="Контакты"
          maxLength={CAPTIONS_VALIDATION_RULES.contactsCaptionMax}
          value={formValue.contactsCaption}
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </label>
      <input
        type="submit"
        className={styles.button}
        value={isLoading ? "Сохранение" : "Сохранить"}
        disabled={isLoading}
      />
    </form>
  );
}
