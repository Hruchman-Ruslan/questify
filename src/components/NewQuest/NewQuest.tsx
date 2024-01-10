import React, { FC, useState } from "react";
import styles from "./NewQuest.module.css";

export const NewQuest: FC = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    console.log(value);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.title}>
        Create New Quest
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
