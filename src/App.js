import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="items">
        {bakeryData.map((item, index) => (
          <div className="item"><BakeryItem setTotal={setTotal} total={total} setCart={setCart} cart={cart} name={item.name} price={item.price} image={item.image} description={item.description} />
          </div>
      ))}
      </div>

      <div className="cart">
        <h2 >Cart</h2>
        {cart.map((item, index) => (<p>{item} </p>))}
        <h2>Total Price: {total}</h2>
      </div>
    </div>
  );
}

export default App;