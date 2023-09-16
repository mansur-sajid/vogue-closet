import React from "react";
import "./Css/ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ img, price, category, id, name }) {
  const newPage = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="card offset-md-0 offset-2 mt-4" style={{ width: "18rem" }}>
        <div className="image">
          <img
            src={require("../ProductImages/" + category +'/'+ id+ "/img1.jpg")}
            className="img-fluid"
            alt={"src/Images/" + img + ".jpeg"}
          />
            <div className="details text-center">
              <p>{name}</p>
              <Link to={"/products/product/"+category+'/' + id} onClick={newPage}>
              <button className="btn">Buy Now</button>
              </Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
