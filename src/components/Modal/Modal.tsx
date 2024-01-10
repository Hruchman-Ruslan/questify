import { FC } from "react";
import { Select } from "../Select/Select";

import styles from "../Card/Card.module.css";
import { NewQuest } from "../NewQuest/NewQuest";

export const Modal: FC = () => {
  return (
    <>
      <div
        className={styles.cardWrapper}
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Select />
        <NewQuest />
      </div>
    </>
  );
};
