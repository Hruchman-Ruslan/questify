import { FC, useState } from "react";

import { Select } from "../Select/Select";
import { NewQuest } from "../NewQuest/NewQuest";
import { Calendar } from "../Calendar/Calendar";
import { Category } from "../Category/Category";

import styles from "./Modal.module.css";
import { Icon } from "../Icon/Icon";

interface FormData {
  title: string;
  difficulty: string;
  date: string;
  time: string;
  category: string;
  type: string;
}

export const Modal: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    difficulty: "",
    date: "",
    time: "",
    category: "",
    type: "Task",
  });

  const handleQuest = (title: string) => {
    setFormData({ ...formData, title });
  };

  const handleSelect = (difficulty: string) => {
    setFormData({ ...formData, difficulty });
  };

  const handleCalendar = (date: string) => {
    setFormData({ ...formData, date });
  };

  const handleTime = (time: string) => {
    setFormData({ ...formData, time });
  };

  const handleCategory = (category: string) => {
    setFormData({ ...formData, category });
  };

  const handleSubmit = () => {
    console.log(formData);
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
          <button
            className={styles.submit}
            type="submit"
            onClick={handleSubmit}
          >
            START
          </button>
        </div>
        <Category onClickCategory={handleCategory} />
      </div>
    </>
  );
};
