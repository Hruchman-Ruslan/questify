import { FC } from "react";
import { Link } from "react-router-dom";

import { Icon } from "../Icon/Icon";
import { useAuth } from "../../redux/auth/useAuth";
import { logout } from "../../redux/auth/authOperations";

import styles from "../Header/Header.module.css";

export const Header: FC = () => {
  const { dispatch, navigation } = useAuth();

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Link to="/main" className={styles.logo}>
            Questify
          </Link>
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
              <Icon
                idIcon="icon-logout"
                onClick={() => {
                  dispatch(logout());
                  navigation("/");
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
