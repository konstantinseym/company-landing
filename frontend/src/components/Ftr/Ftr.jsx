import styles from "./Ftr.module.css";
import Lnk from "../UI/Lnk/Lnk.jsx";

export default function Ftr({ ftr }) {
  return (
    <footer className={styles.ftr}>
      <Lnk path={ftr.link} style={{ maxWidth: "480px", textAlign: "center" }}>
        {ftr.caption}
      </Lnk>
    </footer>
  );
}
