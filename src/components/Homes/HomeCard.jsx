import React from "react";

const HomeCard = ({item : {id, cover, name, rating, time, desc, starring, genres, tags, vedio}}) => {
  return (
   <>
   <div className="box">
    <div className="coverImage">
        <img src={cover} alt="cover" />{cover}
    </div>
   </div>
   </>
  );
}

export default HomeCard;