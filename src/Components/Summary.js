import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Css/Summary.css";
import img from "../Images/logo.jpg";
import {
  addItem,
  removeItem,
  clearCart,
} from "../ReduxFeatures/MyCart/MyCartSlice";

function Summary() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <main>
        <div class="card">
          <div class="card-header">
            <img
              src="https://rvs-order-summary-component.netlify.app/images/illustration-hero.svg"
              alt=""
            />
          </div>
          <div class="card-body">
            <div class="card-title">Order Summary</div>
            <div class="card-text">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </div>
            <div class="card-plan">
              <div class="card-plan-img">
                <img src={img} alt="" />
              </div>
              <div class="card-plan-text">
                <div class="card-plan-title">Items : {cartItems.length}</div>
                <div class="card-plan-price">Total : {cartItems.length}</div>
              </div>
              <div class="card-plan-link">
                <a onClick={() => window.scrollTo(0, 0)}>Change</a>
              </div>
            </div>
            <div class="card-payment-button">
              <button>Proceed to Payment</button>
            </div>
            <div class="card-cancel-button">
              <button onClick={() => dispatch(clearCart())}>
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Summary;
