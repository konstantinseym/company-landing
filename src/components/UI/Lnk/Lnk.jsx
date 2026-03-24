import styles from "./Lnk.module.css";

export default function Lnk({ children, style }) {
  return (
    <a className={styles.lnk} style={style} href="">
      {children}
    </a>
  );
}
