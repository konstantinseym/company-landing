import styles from "./MinorCaption.module.css";

export default function MinorCaption({ children, style }) {
  return <h3 style={style} className={styles.minorcaption}>{children}</h3>;
}
