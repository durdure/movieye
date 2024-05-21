import React from "react";
import './UpComming.css'


const UCard = ({item: {id, cover, name, time }}) => {
    return (
        <> 
        <div className="card-id">
            <div className="image-box">
                <img src={cover} alt="" />
            </div>
            <div className="text-id">
                <h3>{name}</h3>
                <span> {time} </span>
                <br />
                <button className="primary-btn">
                    <i className="fa fa-play"></i>PLAY NOW
                </button>
            </div>
        </div>
        </>
    )
}

export default UCard;