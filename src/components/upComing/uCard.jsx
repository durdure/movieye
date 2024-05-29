import React from "react";
import './UpComming.css'


const UCard = ({item: {id, cover, name, time }}) => {
    return (
        <div className="card-group"> 
            <div className="card">
                <img src={cover} alt="" />

                <div className="layer"></div>
                <div className="info">
                    <h3>{name}</h3>
                    <span> {time} </span>
                    <br />
                    <button className="primary-btn">
                        <i className="fa fa-play"></i></button>
                </div>
            </div>
       </div>
    )
}

export default UCard;