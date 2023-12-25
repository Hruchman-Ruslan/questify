import { FC } from "react";

import styles from "./Icon.module.css";

import sprite from "../../img/icons.svg";

interface IconProps {
  idIcon: string;
  width?: number;
  height?: number;
}

export const Icon: FC<IconProps> = ({ idIcon, width = 30, height = 30 }) => {
  return (
    <svg className={styles.icon} width={width} height={height}>
      <use xlinkHref={`${sprite}#${idIcon}`}></use>
    </svg>
  );
};
