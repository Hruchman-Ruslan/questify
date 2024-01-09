import { FC } from "react";
import { Select } from "../Select/Select";

import styles from "../Card/Card.module.css";

export const Modal: FC = () => {
  return (
    <div className={styles.cardWrapper} style={{ backgroundColor: "black" }}>
      <Select />
    </div>
  );
};
