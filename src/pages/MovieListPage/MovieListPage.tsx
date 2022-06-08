import {FC} from "react";
import {Header} from "../../components/Header/Header";
import {MovieTableCategory} from "../../components/MovieTableCategory/MovieTableCategory";

import styles from "./MovieListPage.module.scss";

export const MovieListPage: FC = () => {

  return (
    <div>
      <Header />
      <MovieTableCategory category="Most Popular"/>
    </div>
  );
};
