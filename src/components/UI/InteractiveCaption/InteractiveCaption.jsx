import styles from "./InteractiveCaption.module.css";

export default function InteractiveCaption({ children, ...props }) {
  return <h3 className={styles.interactivecaption} {...props}>{children}</h3>;
}
