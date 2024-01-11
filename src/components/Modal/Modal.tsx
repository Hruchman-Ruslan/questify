import { FC } from "react";
import { Select } from "../Select/Select";

import styles from "../Card/Card.module.css";
import { NewQuest } from "../NewQuest/NewQuest";
import { Calendar } from "../Calendar/Calendar";

export const Modal: FC = () => {
  return (
    <>
      <div
        className={styles.cardWrapper}
        style={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Select />
        <NewQuest />
        <Calendar />
      </div>
    </>
  );
};
