import React,  { useState } from "react";
import { homeData } from "../../dummyData"
import Home from "./Home";


const Homes = ({ home }) => {    
    const [items, setItems] = useState( homeData )
    return (
        <>
        <section className="home">
            <Home items= { items}/>
        </section>
        <div className="margin">
            hhh
        </div>
        </>
    );
    }

export default Homes;