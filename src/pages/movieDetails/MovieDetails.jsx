import React from "react";
import { DetailBanner, Cast, Videos, Similar, Recommendation } from "./";
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
      <DetailBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <Videos data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default MovieDetails;
