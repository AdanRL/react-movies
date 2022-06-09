import { FC, useState } from 'react';
import { Link } from "react-router-dom";
import { StarBorder, Star } from '@mui/icons-material';
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
  const [tracked, setTracked] = useState(false);
  const handleTracked = () => {
    setTracked(tracked ? false : true);
    console.log(tracked);
  };
  
  return(
      <div className={styles.movieCard}>
        {tracked ? <Star onClick={handleTracked} style={{ color: "yellow", transform: "translateX(85px)" }} /> : <StarBorder onClick={handleTracked} style={{ color: "yellow", transform: "translateX(85px)" }} />}
        <Link to={movieSite} style={{textDecoration: "none"}}>
          <div className={styles.posterImage}>
            <img src={movieImage} alt="Movie poster" />
          </div>
        </Link>
        <div className={styles.infoContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>Release: {releaseDate}</div>
          <div className={styles.popularity}>Popularity: {popularity}</div>
        </div>
      </div>
    );
}
