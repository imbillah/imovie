import React from "react";
import DetailBanner from "./detailBanner/DetailBanner";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./details.scss";
const MovieDetails = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <h2>Movie Details</h2>
      <DetailBanner video={data?.results?.[0]} crew={credits?.crew} />
    </div>
  );
};

export default MovieDetails;
