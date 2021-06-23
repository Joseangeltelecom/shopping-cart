import React from "react"
import { Link } from "react-router-dom"
import "../App.css"

function CartItem({
  id,
  itemName,
  imageId,
  price,
  qty,
  deleteCartItem,
  changeQty,
}) {
  const handleDelete = () => deleteCartItem(id)
  const handleIncrease = () => changeQty(id, 1)
  const handleDecrease = () => changeQty(id, -1)

  return (
    <div className="cartDetails">
      <img src={`https://source.unsplash.com/${imageId}/300x350`} alt={id} />
      <div>
        <Link className="card-title card-title-cart" to={`/shop/${id}`}>
          {itemName}
        </Link>
        <p>{price.toFixed(2)} USD</p>

        <div className="qty-btns">
          <button onClick={handleDecrease} disabled={qty < 2}>
            -
          </button>
          <span>{qty}</span>
          <button onClick={handleIncrease}>+</button>
        </div>

        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default CartItem
