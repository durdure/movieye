import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Trending.css";
import { trending } from "../../dummyData";
import Home from "../Homes/Home";

const Trending = () => {
    const [items, setItem] = useState(trending);
    return(
        <section className="trending">
            <Home items={items}/>
        </section>
    )
}

export default Trending;