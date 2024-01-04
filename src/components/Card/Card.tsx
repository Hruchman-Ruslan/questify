import { FC } from "react";
import { Icon } from "../Icon/Icon";

import styles from "../Card/Card.module.css";

export const Card: FC = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardWrapperHeader}>
        <div className={styles.cardHeaderWrapperStatus}>
          <span className={styles.cardHeaderStatus} />
          <p className={styles.cardHeaderText}>Hard</p>
        </div>
        <div>
          <Icon idIcon="Star" width={14} height={14} />
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <div className={styles.titleBox}>
          <h2 className={styles.title}>Submit report</h2>
        </div>
        <div className={styles.timeWrapper}>
          <p className={styles.time}>Today, 7:30</p>
          <Icon idIcon="fire" width={12} height={18} />
        </div>
        <div className={styles.categoryWrapper}>
          <p className={styles.categoryText}>WORK</p>
        </div>
      </div>
    </div>
  );
};
