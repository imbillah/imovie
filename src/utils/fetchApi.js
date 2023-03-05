import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_API_KEY = import.meta.env.VITE_APP_TMDB_API;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};
export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(baseUrl + url, {
      headers,
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
