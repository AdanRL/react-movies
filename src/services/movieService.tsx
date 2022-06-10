import axios from "axios";

const notFounded = {
  original_title: "Not Found",
  date: "",
  movieImage: "",
  popularity: 0
};

export const getMovie = async(id: number) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    return response.data;
  } catch (err) {
      return notFounded;
  };
};

export const getPopularMovies = async() => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US `);
    return response.data.results;
  } catch (err) {
      return [];
  };
}
