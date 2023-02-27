import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Image, Wrapper } from "../../../components";
import useFetch from "../../../hooks/useFetch";
import "./banner.scss";
const Banner = () => {
  const [bg, setBg] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const nevigate = useNavigate();
  const urls = useSelector((state) => state.home.urls);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bgUrl =
      urls.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBg(bgUrl);
  }, [data]);
  const searchHandler = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && searchQuery.length > 0) {
      nevigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Image src={bg} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <Wrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for movies, tv shows and much more.."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Banner;
