import { useEffect } from "react";
import { fetchData } from "./utils/fetchApi";
import { useDispatch } from "react-redux";
import { getApiConfig, getGenres } from "./store/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Explore, SearchResults, NotFound, MovieDetails } from "./pages";
import { Header, Footer } from "./components";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieData();
    fetchGenres();
  }, []);
  const fetchMovieData = () => {
    fetchData("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfig(url));
    });
  };
  // fetching multiple apis together

  const fetchGenres = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchData(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media/:id" element={<MovieDetails />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:type" element={<Explore />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
