import { FC, useState } from "react";
import { Icon } from "../Icon/Icon";

import styles from "../Select/Select.module.css";

type Color = "blue" | "green" | "red";

type Value = "Normal" | "Easy" | "Hard";

interface SelectProps {
  onClickSelect: (value: Value, color: Color) => void;
}

export const Select: FC<SelectProps> = ({ onClickSelect }) => {
  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<Value>("Normal");
  const [selectedColor, setSelectedColor] = useState<Color>("green");

  const toggleDropdown = () => {
    setActive((prevState) => !prevState);
  };

  const onClick = (difficulty: Value, color: Color) => {
    setSelected(difficulty);
    setSelectedColor(color);
    setActive(false);

    // console.log(`${difficulty} and ${color}`);
    onClickSelect(difficulty, color);
  };

  return (
    <div className={styles.wrapper}>
      <div>
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
      </div>

      <div>
        <Icon idIcon="Star" width={14} height={14} fill="#B9C3C8" />
      </div>
    </div>
  );
};
