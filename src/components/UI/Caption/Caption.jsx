import styles from "./Caption.module.css";

export default function Caption({children}) {
  return <h2 className={styles.caption}>{children}</h2>;
}
