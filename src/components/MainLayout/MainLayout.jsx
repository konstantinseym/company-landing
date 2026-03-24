import styles from "./MainLayout.module.css";
import Caption from "../UI/Caption/Caption.jsx";
import Announcements from "../Announcements/Announcements.jsx";
import Employees from "../Employees/Employees.jsx";
import Details from "../Details/Details.jsx";
import Contacts from "../Contacts/Contacts.jsx";

export default function MainLayout() {
  return (
    <main className={styles.mainlayout}>
      <div className={styles.mainlayout__block}>
        <Caption>Объявления</Caption>
        <Announcements />
      </div>
      <div className={styles.mainlayout__block}>
        <Caption>Адвокаты</Caption>
        <Employees />
      </div>
      <div className={styles.mainlayout__block}>
        <Caption>Реквизиты</Caption>
        <Details />
      </div>
      <div className={styles.mainlayout__block}>
        <Caption>Контакты</Caption>
        <Contacts />
      </div>
    </main>
  );
}
