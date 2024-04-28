import React from "react";

const Home = ({ home }) => {
    return (
        <div>
        <h2>{home.title}</h2>
        <p>{home.description}</p>
        </div>
    );
    }

export default Home;