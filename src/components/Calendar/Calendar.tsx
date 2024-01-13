import React, { FC, useState } from "react";
import { Icon } from "../Icon/Icon";

import styles from "./Calendar.module.css";

interface CalendarProps {
  onClickCalendar: (value: string) => void;
  onClickTime: (value: string) => void;
}

export const Calendar: FC<CalendarProps> = ({
  onClickCalendar,
  onClickTime,
}) => {
  const [date, setDate] = useState(new Date());
  const [showInput, setShowInput] = useState(false);
  const [time, setTime] = useState("");

  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    setDate(selectedDate);
    onClickCalendar(selectedDate.toISOString().split("T")[0]);
  };

  const onTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTime = e.target.value;
    setTime(selectedTime);
    onClickTime(selectedTime);
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
        <div className={styles.wrapperDate}>
          <label>
            <input
              className={styles.inputTime}
              type="date"
              value={date.toISOString().split("T")[0]}
              onChange={onDateChange}
            />
          </label>

          <div className={styles.wrapperTime}>
            <label>
              <input
                className={styles.inputTime}
                type="time"
                value={time}
                onChange={onTimeChange}
              />
            </label>

            <Icon idIcon="done" width={14} height={14} onClick={toggleInput} />
          </div>
        </div>
      )}
    </div>
  );
};
