import React, { useState } from "react";
import "./App.css";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ItemDetails from "./components/ItemDetails";
import seedItems from "./data/seeItems";
import NavBar from "./components/Navbar";
import ComingSoon from "./components/ComingSoon";
import Welcome from "./components/Welcome";
import { Route, Routes } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // adding Items to the cart:
  const addCartItem = (newItem) => {
    // check if already in cart:
    const alreadyInCart = cartItems
      .map((cItem) => cItem.id)
      .includes(newItem.id);

    // if in cart add 1 to qty
    if (alreadyInCart) {
      changeQty(newItem.id, 1);
    } else {
      // if not add complete item
      setCartItems([...cartItems, newItem]);
    }
  };

  // deleting items from the cart:
  const deleteCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // change quntety:
  const changeQty = (id, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + delta } : item
      )
    );
  };

  const cartItemsQty = cartItems.reduce((acc, cur) => acc + cur.qty, 0);

  return (
    <>
      <NavBar cartItemsQty={cartItemsQty} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/shop" element={<Shop items={seedItems} />} />

        <Route
          path="/shop/:id"
          element={<ItemDetails addCartItem={addCartItem} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              items={cartItems}
              deleteCartItem={deleteCartItem}
              changeQty={changeQty}
            />
          }
        />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<div>Eror 404 resource not found</div>} />
      </Routes>
    </>
  );
}

export default App;
