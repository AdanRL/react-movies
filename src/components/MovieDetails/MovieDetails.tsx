import { FC } from "react";
import styles from "./MovieDetails.module.scss";

interface Props {
  title: string;
  posterImage: string;
  genres: string[];
  releaseDate: string;
  description: string;
}
export const MovieDetails: FC<Props> = ({title, posterImage,  genres, releaseDate, description}) => {

  return( 
    <div className={styles.movieDetailsContainer}>
      <div className={styles.imageContainer}>
        <img src={posterImage} alt="" />
      </div>
      <div className={styles.details}>
        <div className={styles.titleContainer}>{title}</div>
        <div className={styles.genresContainer}>{genres}</div>
        <div className={styles.releaseDateContainer}>{releaseDate}</div>
        <div className={styles.descriptionContainer}>{description}</div>
      </div>
    </div>
    );
}
