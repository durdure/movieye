import React,  { useState } from "react";
import { homeData } from "../../dummyData"


const Home = ({ home }) => {    
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

export default Home;