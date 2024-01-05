import { FC } from "react";

import { Icon } from "../Icon/Icon";

import styles from "../CreateCard/CreateCard.module.css";

export const CreateCard: FC = () => {
  return (
    <>
      <button type="button" className={styles.button}>
        <Icon idIcon="plus" fill="#FFF" />
      </button>
    </>
  );
};
