import React,  { useState } from "react";
import { homeData } from "../../dummyData"
import Home from "./Home";
import './Homes.css'


const Homes = ({ home }) => {    
    const [items, setItems] = useState( homeData )
    return (
        <>
        <section className="home">
            <Home items= { items}/>
        </section>
        <div className="margin">
            
        </div>
        </>
    );
    }

export default Homes;