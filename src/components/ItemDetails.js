import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import seedItems from "../data/seeItems";
import "../App.css";

function ItemDetails({ addCartItem }) {
  const [showCompleteOrder, setShowCompleteOrder] = useState(false);
  let navigate = useNavigate();
  const { id } = useParams();

  const handleAdd = () => {
    setShowCompleteOrder(true);
    addCartItem(itemId[0]);
  };

  const itemId = seedItems.filter((item) => item.id === id);

  return (
    <div className="container d-flex justify-content-center align-items-center itemDetails">
      <div className="card-details text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow">
          <img
            src={`https://source.unsplash.com/${itemId[0].imageId}/400x500`}
            alt={itemId[0].id}
            className="card-img-top"
          />
        </div>

        <div className="card-body text-light d-flex justify-content-center align-items-center flex-column">
          <h4 className="card-title">{`${itemId[0].itemName}`}</h4>
          <p className="card-text text-white">${itemId[0].price.toFixed(2)}</p>

          <button
            onClick={handleAdd}
            className="btn btn-outline-secondary rounded-0 px-4"
            target="_blank"
          >
            Add to the cart
          </button>

          {showCompleteOrder && (
            <Link to="/cart">
              <button className="btn btn-outline-secondary rounded-0 mt-3 px-4">
                Complete Order
              </button>
            </Link>
          )}

          <button
            onClick={() => navigate("/shop")}
            className="btn btn-outline-secondary rounded-0 mt-3 px-5"
            target="_blank"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
