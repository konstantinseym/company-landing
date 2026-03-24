import styles from "./Contacts.module.css";
import TextLine from "../UI/TextLine/TextLine.jsx";

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <TextLine style={{marginBottom: "64px"}}>Будем рады ответить на любые вопросы!</TextLine>
      <TextLine style={{fontSize: "1rem"}}>
        Адрес: 305007, Курская область, г. Курск, ул. Моковская, д. 11а
      </TextLine>
      <TextLine style={{fontSize: "1rem"}}>
        Телефон: +7 903 639 72 70
      </TextLine>
      <TextLine style={{fontSize: "1rem"}}>
        e-mail: y.p.status@mail.ru
      </TextLine>
    </div>
  );
}
