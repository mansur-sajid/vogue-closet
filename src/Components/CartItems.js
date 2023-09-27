import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import {
  addItem,
  removeItem,
  clearCart,
} from "../ReduxFeatures/MyCart/MyCartSlice";
import "./Css/cart.css";

function CartItems() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const editQuantity = (id, quan) => {
    const id1 = "quantity-" + id;
    if (quan === -1 && document.getElementById(id1).value == 0) {
      return;
    }
    document.getElementById(id1).value =
      1 * document.getElementById(id1).value + quan;
  };
  return (
    <div id="cartPage">
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div className="product d-flex" key={item.id}>
          <div className="cart-image">
            <img
              src={require("../ProductImages/" +
                item.category +
                "/" +
                item.id +
                "/img1.jpg")}
              alt=""
              className="col-5"
            />
          </div>
          <div className="cart-details col-7">
            <h5>{item.name}</h5>
            <button
              className="btn btn-primary"
              onClick={() => {
                editQuantity(item.id, -1);
              }}
            >
              -
            </button>
            <input
              type="number"
              min={0}
              className="inputForQuantity"
              disabled
              id={"quantity-" + item.id}
              key={item.id}
              value={0}
            />{" "}
            <button
              className="btn btn-primary"
              onClick={() => {
                editQuantity(item.id, 1);
              }}
            >
              +
            </button>
            <br />
            <Stack direction="row" className="mt-2" spacing={2}>
              <Button
                variant="contained"
                color="error"
                className="deletebutton"
                startIcon={<DeleteIcon />}
                onClick={() => dispatch(removeItem(item))}
              >
                Delete
              </Button>
            </Stack>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
