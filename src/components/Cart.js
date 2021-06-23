import React from "react"
import { Link, useHistory } from "react-router-dom"
import CartDetails from "./CartDetails"
import "../App.css"

function Cart({ items, deleteCartItem, changeQty }) {
  const { goBack } = useHistory()
  const cartItems = items.map((item) => (
    <CartDetails
      key={item.id}
      {...item}
      deleteCartItem={deleteCartItem}
      changeQty={changeQty}
    />
  ))

  const cartTotal = items
    .map((item) => item.price * item.qty)
    .reduce((a, c) => a + c, 0)
    .toFixed(2)

  return (
    <div className="containerMayor">
      {items.length > 0 ? (
        <div className="container cartDetails">
          <div className="row">
            <div className="cart-grid">{cartItems}</div>
          </div>

          <div className="total-section">
            <button
              className="btn btn-outline-secondary rounded-0 mt-3 px-5 "
              onClick={goBack}
            >
              Go Back
            </button>
            <h2>
              <span>Total</span> {cartTotal}
              USD
            </h2>
            <Link to="/coming-soon">
              <button className="btn btn-outline-secondary rounded-0 mt-3 px-5">
                Continue
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="empty-cart-container">
          <h2 className="empty-cart-text">- Your cart is empty -</h2>
        </div>
      )}
    </div>
  )
}

export default Cart
