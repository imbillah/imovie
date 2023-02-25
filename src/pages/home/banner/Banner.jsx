import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./banner.scss";
const Banner = () => {
  const [bg, setBg] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const nevigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && searchQuery.length > 0) {
      nevigate(`/search/${searchQuery}`);
    }
  };
  return (
    <header className="banner">
      <h2>Hero Banner</h2>
    </header>
  );
};

export default Banner;
