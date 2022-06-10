import { FC, useState, useEffect } from "react";

import { getPopularMovies } from "../../services/movieService";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieTableCategory.module.scss";
interface Props {
  category: string;
}
export const MovieTableCategory: FC<Props> = ({category}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadData = async() => {
      const movieInfo = await getPopularMovies();
      setMovies(movieInfo);
    }
    loadData();
  }, [])

  const cards:any = [];
  movies.forEach((movie:any, index) => {
      cards.push(<MovieCard key={index} id={movie.id} title={movie.original_title} movieImage={"https://image.tmdb.org/t/p/w188_and_h282_bestv2" + movie.poster_path} releaseDate={movie.release_date}  popularity={movie.popularity}  />)
  });

  return( 
    <div className={styles.movieTableContainer}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>{category}</h2>
        </div>
        <div className={styles.line}></div>
      </div>
        <div className={styles.sliderContainer}>{cards}</div>
    </div>
  );
}
