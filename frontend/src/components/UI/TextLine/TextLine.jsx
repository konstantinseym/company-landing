import styles from "./TextLine.module.css";

export default function TextLine({ children, style }) {
  return (
    <p className={styles.textline} style={style}>
      {children}
    </p>
  );
}
