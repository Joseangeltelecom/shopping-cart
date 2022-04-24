import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Item({ id, title, price, imageId }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <Link to={`/shop/${id}`}>
        <div className="overflow">
          <img
            src={`https://source.unsplash.com/${imageId}/400x500`}
            alt={id}
            className="card-img-top"
          />
        </div>
      </Link>

      <div>
        <Link className="card-title" to={`/shop/${id}`}>
          <h4 className="card-title-text">{title}</h4>
        </Link>
        <p className="card-text text-white">${price}</p>
      </div>
    </div>
  );
}

export default Item;
