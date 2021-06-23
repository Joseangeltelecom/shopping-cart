import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "../App.css"

function ItemDetails({ item, addCartItem }) {
  const [showCompleteOrder, setShowCompleteOrder] = useState(false)
  const { goBack } = useHistory()

  const handleAdd = () => {
    setShowCompleteOrder(true)
    addCartItem(item)
  }

  return (
    <div className="container d-flex justify-content-center align-items-center itemDetails">
      <div className="card-details text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow">
          <img
            src={`https://source.unsplash.com/${item.imageId}/400x500`}
            alt={item.id}
            className="card-img-top"
          />
        </div>

        <div className="card-body text-light d-flex justify-content-center align-items-center flex-column">
          <h4 className="card-title">{`${item.itemName}`}</h4>
          <p className="card-text text-white">${item.price.toFixed(2)}</p>

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
            onClick={goBack}
            className="btn btn-outline-secondary rounded-0 mt-3 px-5"
            target="_blank"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}

/* Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string,
} */

export default ItemDetails
