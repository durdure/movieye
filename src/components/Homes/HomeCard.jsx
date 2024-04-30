import React from "react";
import { Link } from "react-router-dom";
import Home from "./Homes";

const HomeCard = ({item : {id, cover, name, rating, time, desc, starring, genres, tags, vedio}}) => {
  return (
   <>
   <div className="box">
    <div className="coverImage">
        <img src={cover} alt="cover" />
    </div>
   </div>
   </>
  );
}

export default HomeCard;