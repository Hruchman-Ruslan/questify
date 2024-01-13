import { FC } from "react";

import { Select } from "../Select/Select";
import { NewQuest } from "../NewQuest/NewQuest";
import { Calendar } from "../Calendar/Calendar";
import { Category } from "../Category/Category";

import styles from "../Card/Card.module.css";

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
        className={styles.cardWrapper}
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
        <Category onClickCategory={handleCategory} />
      </div>
    </>
  );
};
