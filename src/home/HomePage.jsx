import React, { useState } from "react";
import Homes from "../components/Homes/Homes";
import UpComming from "../components/upComing/UpComming";
import { latest, recommended, upcome } from "../dummyData"
//styles
import "./HomePages.css";


const HomePages = () => {
    const [items, setItems] = useState(upcome)
    return (
        <>
           <Homes />
           <UpComming items={items} title= 'UPCOMMING MOVIES' />
        </>
    );
    }

export default HomePages;