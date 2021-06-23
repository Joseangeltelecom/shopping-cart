import React from 'react'
import Item from './Item'
import "../App.css"

/* const findItem = (id) => seedItems.find((item) => item.id === id) */


function Shop({ items }) {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4" key={item.id}>
            <Item
              title={item.itemName}
              imageId={item.imageId}
              price={item.price}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
