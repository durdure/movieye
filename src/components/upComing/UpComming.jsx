import React from "react";
import { Link } from "react-router-dom";
import UCard from "./uCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SinglePage from "../watch/singlepage";


const SmapleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
}

const SmaplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-chevron-left"></i>
      </button>
    </div>
  );
}

const UpComming = ({ items, title }) => {
  const settings = {
    dots: false,
    Infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SmapleNextArrow />,
    prevArrow: <SmaplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      }
      
    ]
  };

  return (
    <>
      <section className="upcome">
        <div className="container">
          <div className="heading flexSB">
            <h1>{title}</h1>
          
            <a href= {<SinglePage/>}> VIEW ALL</a>
            <div className="break"></div>
          </div>

          <div className="content">
            <Slider {...settings}>
              {items.map((item) => (
                <UCard key={item.id} item={item} />
              ))}
            </Slider> 
          </div>
        </div>
      </section>
    </>
  );
};

export default UpComming;
