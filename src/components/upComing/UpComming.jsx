import React from "react";
import { Link } from "react-router-dom";
import uCard from "./uCard"

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
                    { items.map((item) => (
                        <uCard key= {item.id} item = {item}/>
                    )) }
                </div>
            </div>
        </section>
        </>
    )
}

export default UpComming