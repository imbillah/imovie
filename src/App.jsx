import { useEffect } from "react";
import { fetchData } from "./utils/fetchApi";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfig } from "./store/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Explore, SearchResults, NotFound, MovieDetails } from "./pages";
import { Header, Footer } from "./components";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieData();
  }, []);
  const fetchMovieData = () => {
    fetchData("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfig(url));
    });
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
