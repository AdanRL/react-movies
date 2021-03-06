import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import { Button } from "../Button/Button";

export const Header: FC = () => {
  
  return( 
    <div className={styles.header}>
      <Link to="/react-movies" style={{textDecoration: "none"}}>
        <div className={styles.logo}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react logo" width="30px" height="30px" />
        </div>
      </Link>
      <Link to="/react-movies" style={{textDecoration: "none"}}>
        <div className={styles.title}>React Movies</div>
      </Link>
      <div className={styles.buttonContainer}>
        <Button text="Log In" width="150px" height="40px" color="#F58F8F"/>
        <Button text="Sign Up" width="150px" height="40px" color="#EC6161"/>
      </div>
    </div>
    );
};
