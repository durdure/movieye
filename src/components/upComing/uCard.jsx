import React from "react";


const UCard = ({item: {id, cover, name, time }}) => {
    return (
        <> 
        <div className="MovieBox">
            <div className="img">
                <img src={cover} alt="" />
            </div>
        </div>
        </>
    )
}

export default UCard;