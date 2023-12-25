import { FC } from "react";

import styles from "../Header/Header.module.css";
import { Icon } from "../Icon/Icon";

export const Header: FC = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <a href="/" className={styles.logo}>
            Questify
          </a>
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.text}>John’s Quest Log</p>
        </div>
        <div className={styles.iconWrapper}>
          <ul className={styles.iconList}>
            <li>
              <Icon idIcon="icon-challenge" width={40} height={40} />
            </li>
            <li>
              <Icon idIcon="icon-logout" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
