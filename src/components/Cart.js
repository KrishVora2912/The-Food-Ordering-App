import React from "react";
import { useSelector } from "react-redux";
import MenuItemEntry from "./MenuItemEntry";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      {cartItems.map((cartItem) => {
        return <MenuItemEntry key={cartItem.id} data={cartItem} />;
      })}
    </div>
  );
};

export default Cart;
