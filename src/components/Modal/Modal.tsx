import { FC } from "react";

import { Select } from "../Select/Select";
import { NewQuest } from "../NewQuest/NewQuest";
import { Calendar } from "../Calendar/Calendar";
import { Category } from "../Category/Category";

import styles from "./Modal.module.css";
import { Icon } from "../Icon/Icon";

export const Modal: FC = () => {
  const handleSelect = (difficulty: string) => {
    console.log(`${difficulty}`);
  };

  const handleQuest = (title: string) => {
    console.log(`${title}`);
  };

  const handleCalendar = (date: string) => {
    console.log(`${date}`);
  };

  const handleTime = (time: string) => {
    console.log(`${time}`);
  };

  const handleCategory = (category: string) => {
    console.log(`${category}`);
  };

  return (
    <>
      <div
        className={styles.modalWrapper}
        style={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Select onClickSelect={handleSelect} />
        <NewQuest onChangeQuest={handleQuest} />
        <Calendar onClickCalendar={handleCalendar} onClickTime={handleTime} />
        <div className={styles.wrapperSubmit}>
          <Icon idIcon="clear" width={10} height={10} fill="#DB0837" />
          <span className={styles.decor}>|</span>
          <button className={styles.submit} type="submit">
            START
          </button>
        </div>
        <Category onClickCategory={handleCategory} />
      </div>
    </>
  );
};
