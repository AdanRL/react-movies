import {FC} from "react";
import {Header} from "../../components/Header/Header";
import {MovieTableCategory} from "../../components/MovieTableCategory/MovieTableCategory";

import styles from "./MovieListPage.module.scss";
import { TrackedList } from '../../components/TrackedList/TrackedList';

export const MovieListPage: FC = () => {

  return (
    <div className={styles.page}>
      <Header />
      <MovieTableCategory category="Most Popular"/>
      <TrackedList />
    </div>
  );
};
