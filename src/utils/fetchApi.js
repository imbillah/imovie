import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";

const TMDB_API_KEY = import.meta.env.VITE_APP_TMDB_API;

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}${url}?api_key=${TMDB_API_KEY}`
    );
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
};
