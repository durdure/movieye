import React, { useState } from "react";
import Homes from "../components/Homes/Homes";
import UpComming from "../components/upComing/UpComming";
import Footer from "../components/footer/Footer";
//styles
import "./HomePages.css";
import { latest, recommended, upcome } from "../dummyData";
import Trending from "../components/Trending/Trending";



const HomePages = () => {
   const [items, setItems] = useState( upcome )
   const [item, setItem] = useState( latest )
   const [re, setRec] = useState( recommended )
    return (
        <>
        <Homes home={items} />
        <UpComming items={items} title="Upcoming Movies" />
        <UpComming items={item} title="Latest Movies" />
        <Trending />
        <UpComming items={re} title="Recommended Movies" />
        <Footer />
        </>
    );
    }

export default HomePages;