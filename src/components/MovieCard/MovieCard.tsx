import { FC, useState, useEffect } from "react";
import styles from "./MovieCard.module.scss";
import { getMovie } from "../../services/movieService";

interface Props {
  id: number;
}
export const MovieCard: FC<Props> = ({id}) => {
  const [data, setData] = useState({
    title: "",
    movieImage: "",
    releaseDate: "",
    popularity: 0
  });

  useEffect(() => {
    const loadData = async() => {
      const movieInfo = await getMovie(id);
      setData({
        title: movieInfo.original_title,
        movieImage: "https://image.tmdb.org/t/p/w188_and_h282_bestv2" + movieInfo.poster_path,
        releaseDate: movieInfo.release_date,
        popularity: movieInfo.popularity
      });
    };
    loadData();
  }, [id])

  return( 
    <div className={styles.movieCard}>
      <div className={styles.posterImage}>
        <img src={data.movieImage} alt="Movie poster" />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.date}>{data.releaseDate}</div>
        <div className={styles.popularity}>{data.popularity}</div>
      </div>
    </div>
    );
}
