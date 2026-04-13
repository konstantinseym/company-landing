import TextLine from "../UI/TextLine/TextLine.jsx";

import styles from "./Details.module.css";

export default function Details({ details }) {
  return (
    <div className={styles.details}>
      {details.map((detailsItem, index) => (
        <TextLine key={index}>{detailsItem.value}</TextLine>
      ))}
    </div>
  );
}
