import React from "react";
import HomeCard from "./HomeCard";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

const SmapleNextArrow = (props) => {
    const {onClick} = props
    return  <div className="control-btn" onClick={onClick}>
        <button className="next">
            <i className="fa fa-chevron-right">
            </i>
        </button>
    </div>
}

const SmaplePrevArrow = (props) => {
    const {onClick} = props
    return  <div className="control-btn" onClick={onClick}>
        <button className="prev">
            <i className="fa fa-chevron-left">
            </i>
        </button>
    </div>
}


const Home = ({items}) => {
    const settings = {
        dots: false,
        Infinite: true,
        speed: 1500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        nextArrow:<SmapleNextArrow/>,
        prevArrow:<SmaplePrevArrow/>,
    }
    return (

        <>
        <div className="homeContainer">
            <Slider {...settings} >
                { items.map((item) => (   
                     <HomeCard key={item.id} item={item}  /> 
                 ))}
            </Slider>
        </div>
        </>
        
    );
    }

export default Home;