import { FC } from "react";
import styles from "./MovieCard.module.scss";

interface Props {
  title: string;
  movieImage: string;
  releaseDate: string;
  popularity: number;
}

export const MovieCard: FC<Props> = ({title, movieImage, releaseDate, popularity = 0}) => {

  return( 
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
    );
}
