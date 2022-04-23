import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import welcome from "./components/Welcome";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ItemDetails from "./components/ItemDetails";
import seedItems from "./data/seeItems";
import NavBar from "./components/Navbar";
import ComingSoon from "./components/ComingSoon";

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

  const findItem = (id) => seedItems.find((item) => item.id === id);

  const cartItemsQty = cartItems.reduce((acc, cur) => acc + cur.qty, 0);

  /*   className={`${navbar ? "navBar active" : "navBar"}`} */

  return (
    <Router basename="/">
      <React.Fragment>
        <div className="App">
          <NavBar cartItemsQty={cartItemsQty} />
          <Switch>
            <Route exact path="/" component={welcome} />

            <Route exact path="/shop">
              <Shop items={seedItems} />
            </Route>

            <Route
              exact
              path="/shop/:id"
              render={(routeProps) => (
                <ItemDetails
                  item={findItem(routeProps.match.params.id)}
                  addCartItem={addCartItem}
                />
              )}
            />
            <Route exact path="/cart">
              <Cart
                items={cartItems}
                deleteCartItem={deleteCartItem}
                changeQty={changeQty}
              />
            </Route>
            <Route exact path="/coming-soon">
              <ComingSoon />
            </Route>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
