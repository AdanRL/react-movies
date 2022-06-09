import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";

interface Props {
  id: number;
  title: string;
  movieImage: string;
  releaseDate: string;
  popularity: number;
}

export const MovieCard: FC<Props> = ({id, title, movieImage, releaseDate, popularity = 0}) => {
  let movieSite = "/details/" + id.toString();
  
  return(
   
    <Link to={movieSite}>
      <div className={styles.movieCard}>
        <div className={styles.posterImage}>
          <img src={movieImage} alt="Movie poster" />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>Release: {releaseDate}</div>
          <div className={styles.popularity}>Popularity: {popularity}</div>
        </div>
      </div>
    </Link>
    );
}
