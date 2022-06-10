import {FC, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

import {Header} from "../../components/Header/Header";
import {MovieDetails} from "../../components/MovieDetails/MovieDetails";
import { getMovie } from "../../services/movieService";

export const MovieDetailPage: FC = () => {
  let url = useLocation();
  const [movieData, setMovieData] = useState({
    title: "",
    posterImage: "",
    backdropImage: "",
    genres: [],
    releaseDate: "",
    description: "",

  });

  useEffect(() => {
    const loadData = async(id: any) => {
      const movieInfo = await getMovie(id);
      const genres = movieInfo.genres.map((genre:any) => {
        return genre.name
      })

      setMovieData({ 
        title: movieInfo.original_title,
        posterImage: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + movieInfo.poster_path,
        backdropImage: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" + movieInfo.backdrop_path,
        genres: genres,
        releaseDate: movieInfo.realease_date,
        description: movieInfo.overview
      });
    }

    loadData(url.pathname.split("/").pop());
  },[url])
  return (
    <div>
      <Header />
      <MovieDetails 
        title={movieData.title} 
        posterImage={movieData.posterImage} 
        genres={movieData.genres} 
        releaseDate={movieData.releaseDate} 
        description={movieData.description} 
      />
    </div>
  );
};
