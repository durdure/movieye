import React from "react";
import { Link } from "react-router-dom";
import UpCommingCard from "./UpCommingCard"

const UpComming = (items, title) =>{
    return (
        <>
        <section className="upcome">
            <div className="container">
                <div className="heading flexSB">
                    <h1>{title}</h1>
                    <Link>VIEW ALL</Link>
                </div>

                <div className="content">
                    {items.map(() => (<UpCommingCard key= {items.id} items= {items}/>))}
                </div>
            </div>
        </section>
        </>
    )
}

export default UpComming