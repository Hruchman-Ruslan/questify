import { FC } from "react";

import styles from "./Icon.module.css";

import sprite from "/src/img/icons.svg";

interface IconProps {
  idIcon: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export const Icon: FC<IconProps> = ({
  idIcon,
  width = 30,
  height = 30,
  onClick,
}) => {
  return (
    <svg
      className={styles.icon}
      width={width}
      height={height}
      onClick={onClick}
    >
      <use xlinkHref={`${sprite}#${idIcon}`}></use>
    </svg>
  );
};
