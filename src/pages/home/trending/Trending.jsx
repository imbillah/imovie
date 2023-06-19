import React, { useState } from "react";
import { Carousel, SwitchTabs, Wrapper } from "../../../components";
import useFetch from "../../../hooks/useFetch";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection" style={{ marginTop: "20px" }}>
      <Wrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </Wrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
