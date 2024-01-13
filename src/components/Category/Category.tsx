import { FC, useState } from "react";

import { Icon } from "../Icon/Icon";

import styles from "./Category.module.css";

type Color = "#B9C3C8" | "#FFE6D3" | "#CDF7FF" | "#FFF6C0" | "#F8D2FF";

type Category = "STUFF" | "FAMILY" | "HEALTH" | "LEARNING" | "LEISURE";

interface CategoryProps {
  onClickCategory: (category: Category, color: Color) => void;
}

export const Category: FC<CategoryProps> = ({ onClickCategory }) => {
  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<Category>("STUFF");
  const [selectedColor, setSelectedColor] = useState<Color>("#B9C3C8");

  const toggleDropdown = () => {
    setActive((prevState) => !prevState);
  };

  const onClick = (category: Category, color: Color) => {
    setSelected(category);
    setSelectedColor(color);
    setActive(false);

    // console.log(`${category} and ${color}`);
    onClickCategory(category, color);
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
              onClick={() => onClick("STUFF", "#B9C3C8")}
            >
              STUFF
            </p>
          </li>
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
