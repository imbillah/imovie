import React from "react";
import "./home.scss";
import { Banner, Trending, Popular, TopRated } from "./";
const Home = () => {
  return (
    <main>
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </main>
  );
};

export default Home;
