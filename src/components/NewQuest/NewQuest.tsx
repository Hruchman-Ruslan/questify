import React, { FC, useState } from "react";
import styles from "./NewQuest.module.css";

interface NewQuestProps {
  onChangeQuest: (value: string) => void;
}

export const NewQuest: FC<NewQuestProps> = ({ onChangeQuest }) => {
  const [title, setTitle] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);

    // console.log(title);
    onChangeQuest(title);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.title}>
        Create New Quest
        <input
          type="text"
          className={styles.input}
          value={title}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
