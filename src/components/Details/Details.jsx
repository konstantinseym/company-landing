import styles from "./Details.module.css";
import TextLine from "../UI/TextLine/TextLine.jsx";

export default function Details() {
  return (
    <div className={styles.details}>
      <TextLine>
        Юридический адрес: 305007, г. Курск, ул. Моковская, д. 11а, помещ. 208
      </TextLine>
      <TextLine>ОГРН: 1194600000011 ИНН: 4632249825 КПП: 463201001</TextLine>
      <TextLine>
        Управляющий партнер: Адвокат Телегин Руслан Евгеньевич (регистрационный
        номер 46/521 в реестре адвокатов Курской области), ИНН 463213679060
      </TextLine>
    </div>
  );
}
