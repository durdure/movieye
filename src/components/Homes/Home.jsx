import React from "react";
import HomeCard from "./HomeCard";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import UpComming from "../upComing/UpComming";
import Footer from "../footer/Footer";

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
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
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
        <UpComming items={items} title= 'UPCOMMING MOVIES'  />
        <Footer/>
        </>
        
    );
    }

export default Home;