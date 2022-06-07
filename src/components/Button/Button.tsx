import { FC } from "react";
import styles from "./Button.module.css";

interface Props {
  text: string;
  width: string;
  height: string;
  color?: string;
}
export const Button: FC<Props> = ({ text, width, height, color }) => {
  
  return( 
    <button className={styles.button} style={{ width: width, height: height, background: color }}> { text } </button>
    );
}
