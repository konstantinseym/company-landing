import styles from "./Ftr.module.css";
import Lnk from "../UI/Lnk/Lnk.jsx";

export default function Ftr() {
  return (
    <footer className={styles.ftr}>
      <Lnk style={{ maxWidth: "480px", textAlign: "center" }}>
        Политика Коллегии адвокатов «Юридическое Партнерство «Статус»
        Адвокатской палаты Курской области в отношении обработки персональных
        данных
      </Lnk>
    </footer>
  );
}
