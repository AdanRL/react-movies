import { FC } from "react";
import { useSelector } from "react-redux";

import styles from "./TrackedList.module.scss";

export const TrackedList: FC = () => {
  const { trackedList } = useSelector((state:any) => state.trackedMovies);

  const list:any = [];
  trackedList.forEach((movie:any, index:number) => {
    list.push(<div key={index} className={styles.movieTitle}>{movie}</div>);
  });

  return(
    <div className={styles.listContainer}>
      <h2>Your tracked List</h2>
      {list}
    </div>
  );
};
