import React from "react";
import { Link } from "react-router-dom";
import UCard from "./uCard";

const UpComming = ({ items, title }) => {
  return (
    <>
      <section className="upcome">
        <div className="container">
          <div className="heading flexSB">
            <h1>{title}</h1>
            <Link to='./'>VIEW ALL</Link>
          </div>

          {/* <div className="content">
            {Array.isArray(items) && items.map((item) => (
              <UCard key={item.id} item={item} />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default UpComming;
