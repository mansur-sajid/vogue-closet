import React from "react";
import "./Css/ProductCard.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Swal from "sweetalert2";

import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../ReduxFeatures/MyCart/MyCartSlice";


function ProductCard({ img, price, category, id, name }) {
  const dispatch = useDispatch();
  const newPage = () => {
    window.scrollTo(0, 0);
  };
  const addToCart = () => {
    
  };
  return (
    <>
      <div className="card offset-md-0 offset-2 mt-4" style={{ width: "18rem" }}>
      <IconButton color="primary" aria-label="add to shopping cart" className="addToCart" onClick={()=>{
        Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          customClass: 'swal-wide',
          title: 'Product added to cart',
          showConfirmButton: false,
          timer: 1500
        })
        dispatch(addItem({img, id, price, category, name}));
      }}>
    <AddShoppingCartIcon />
  </IconButton>
        <div className="image">
          <img
            src={require("../ProductImages/" + category +'/'+ id+ "/img1.jpg")}
            className="img-fluid"
            alt={"src/Images/" + img + ".jpeg"}

          />
            <div className="details text-center">
              <p>{name}</p>
              <Link to={"/products/product/"+category+'/' + id} onClick={newPage}>
              <button className="btn">View Details</button>
              </Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
