import { FC } from "react";
import { Icon } from "../Icon/Icon";

import styles from "../Card/Card.module.css";

export const Card: FC = () => {
  return (
    <div className={styles.cardWrapper}>
      <Icon idIcon="challenge" />
    </div>
  );
};
