import { FC, useState } from "react";

import { Icon } from "../Icon/Icon";

import styles from "./Category.module.css";

type Color = "#FFE6D3" | "#CDF7FF" | "#FFF6C0" | "#F8D2FF";

type Value = "FAMILY" | "HEALTH" | "LEARNING" | "LEISURE";

export const Category: FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<Value>("FAMILY");
  const [selectedColor, setSelectedColor] = useState<Color>("#FFE6D3");

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
    <div className={styles.wrapper} style={{ background: selectedColor }}>
      <div className={styles.box} onClick={toggleDropdown}>
        <p className={styles.text}>{selected}</p>
        {active ? (
          <Icon idIcon="triangle-up" width={12} height={12} />
        ) : (
          <Icon idIcon="triangle-down" width={12} height={12} />
        )}
      </div>

      {active && (
        <ul className={styles.dropdown}>
          <li className={styles.dropdownItem}>
            <p
              className={styles.text}
              onClick={() => onClick("FAMILY", "#FFE6D3")}
            >
              FAMILY
            </p>
          </li>
          <li className={styles.dropdownItem}>
            <p
              className={styles.text}
              onClick={() => onClick("HEALTH", "#CDF7FF")}
            >
              HEALTH
            </p>
          </li>
          <li className={styles.dropdownItem}>
            <p
              className={styles.text}
              onClick={() => onClick("LEARNING", "#FFF6C0")}
            >
              LEARNING
            </p>
          </li>
          <li className={styles.dropdownItem}>
            <p
              className={styles.text}
              onClick={() => onClick("LEISURE", "#F8D2FF")}
            >
              LEISURE
            </p>
          </li>
        </ul>
      )}
    </div>
  );
};
