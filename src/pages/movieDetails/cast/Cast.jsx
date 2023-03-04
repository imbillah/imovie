import React from "react";
import { useSelector } from "react-redux";

import "./cast.scss";

import { Wrapper, Image } from "../../../components";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  const { urls } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <Wrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item) => {
              let imgUrl = item.profile_path
                ? urls.profile + item.profile_path
                : avatar;
              return (
                <div key={item.id} className="listItem">
                  <div className="profileImg">
                    <Image src={imgUrl} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Cast;
