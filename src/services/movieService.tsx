import axios from "axios";

const notFounded = {
  original_title: "Not Found",
  date: "",
  movieImage: "",
  popularity: 0
};
export const getMovie = async(id: number) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=18d64d5e87a736e021950fab1366f3b0&language=en-US`);
    return response.data;
  } catch (err) {
      return notFounded;
  };
};
