import { FC } from "react";

import { Select } from "../Select/Select";
import { NewQuest } from "../NewQuest/NewQuest";
import { Calendar } from "../Calendar/Calendar";
import { Category } from "../Category/Category";

import styles from "../Card/Card.module.css";

export const Modal: FC = () => {
  return (
    <>
      <div
        className={styles.cardWrapper}
        style={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Select />
        <NewQuest />
        <Calendar />
        <Category />
      </div>
    </>
  );
};
