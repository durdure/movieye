import React from "react";
import './UpComming.css'


const UCard = ({item: {id, cover, name, time }}) => {
    return (
            <div className="card">
                <img src={cover} alt="" />
                <div className="card-content">
                 <h2>{name}</h2>
                    <p>{time}</p>
                    <a href="/play">
                        <span class="material-symbols-outlined">
                            <button className="button-card">
                                Play now
                            </button>
                        </span>
                    </a>
            </div>
        </div>
    )
}

export default UCard;