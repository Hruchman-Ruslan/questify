import { FC } from "react";

import styles from "./Icon.module.css";

import sprite from "../../img/icons.svg";

interface IconProps {
  idIcon: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  fill?: string;
}

export const Icon: FC<IconProps> = ({
  idIcon,
  width = 30,
  height = 30,
  onClick,
  fill = "#00d7ff",
}) => {
  return (
    <svg
      className={styles.icon}
      width={width}
      height={height}
      onClick={onClick}
      fill={fill}
    >
      <use xlinkHref={`${sprite}#icon-${idIcon}`}></use>
    </svg>
  );
};
