import { FC, useState } from "react";
import { Icon } from "../Icon/Icon";

import styles from "../Select/Select.module.css";

type Color = "blue" | "green" | "red";

type Value = "Normal" | "Easy" | "Hard";

export const Select: FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<Value>("Normal");
  const [selectedColor, setSelectedColor] = useState<Color>("green");

  const toggleDropdown = () => {
    setActive((prevState) => !prevState);
  };

  const onClick = (value: Value, color: Color) => {
    setSelected(value);
    setSelectedColor(color);
    setActive(false);

    console.log(`${value} and ${color}`);
  };

  return (
    <>
      <div className={styles.selectMenu} onClick={toggleDropdown}>
        <span
          className={
            styles[
              `dropdownColor${
                selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)
              }`
            ]
          }
        ></span>
        <div className={styles.dropdownDefault}>{selected}</div>
        {active ? (
          <Icon idIcon="triangle-up" width={12} height={12} />
        ) : (
          <Icon idIcon="triangle-down" width={12} height={12} />
        )}
      </div>

      {active && (
        <ul className={styles.dropdown}>
          <li className={styles.dropdownItem}>
            <span className={styles.dropdownColorBlue}></span>
            <p
              className={styles.dropdownText}
              onClick={() => onClick("Easy", "blue")}
            >
              Easy
            </p>
          </li>
          <li className={styles.dropdownItem}>
            <span className={styles.dropdownColorGreen}></span>
            <p
              className={styles.dropdownText}
              onClick={() => onClick("Normal", "green")}
            >
              Normal
            </p>
          </li>
          <li className={styles.dropdownItem}>
            <span className={styles.dropdownColorRed}></span>
            <p
              className={styles.dropdownText}
              onClick={() => onClick("Hard", "red")}
            >
              Hard
            </p>
          </li>
        </ul>
      )}
    </>
  );
};
