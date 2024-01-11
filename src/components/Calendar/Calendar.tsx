import React, { FC, useState } from "react";
import { Icon } from "../Icon/Icon";

import styles from "./Calendar.module.css";

export const Calendar: FC = () => {
  const [date, setDate] = useState(new Date());
  const [showInput, setShowInput] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    setDate(selectedDate);
    setShowInput(false);
    console.log(selectedDate);
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const getDayOfWeek = () => {
    const options = { weekday: "long" } as const;
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{getDayOfWeek()}</p>
      <Icon idIcon="calendar" width={14} height={14} onClick={toggleInput} />
      {showInput && (
        <label>
          <input
            type="date"
            value={date.toISOString().split("T")[0]}
            onChange={onChange}
          />
        </label>
      )}
    </div>
  );
};
