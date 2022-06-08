import { FC, useState, useEffect } from "react";
import styles from "./MovieTableCategory.module.scss";
import { getPopularMovies } from "../../services/movieService";
import { MovieCard } from "../MovieCard/MovieCard";
interface Props {
  category: string;
}
export const MovieTableCategory: FC<Props> = ({category}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadData = async() => {
      const movieInfo = await getPopularMovies();
      setMovies(movies.concat(movieInfo));
    }
    loadData();
  }, [movies])

  const cards:any = [];
  movies.forEach((movie:any) => {
      cards.push(<MovieCard title={movie.original_title} movieImage={"https://image.tmdb.org/t/p/w188_and_h282_bestv2" + movie.poster_path} releaseDate={movie.release_date}  popularity={movie.popularity}  />)
  });

  return( 
    <div className={styles.movieTableContainer}>
      <div className={styles.title}>{category}</div>
      <div className={styles.line}></div>
      <div className={styles.grid}>{cards}</div>
    </div>
    );
}
