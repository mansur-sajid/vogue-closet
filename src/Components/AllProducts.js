import React from "react";
import ProductCard from "./ProductCard";
import "./Css/AllProducts.css";
import Loader from "./Loader";
import { useProducts } from "../Hooks/UseProducts";

function AllProducts({ cat }) {
  var category = cat;
  console.log(category);
  const { data, isLoading } = useProducts();
  if (isLoading === true) {
    return <Loader />;
  }
  return (
    <>
      <div className="catalog mt-5 row col-12">
        {data?.data
          ?.filter((product) => {
            if (category !== "" && product.category === category) {
              return product;
            } else if (category === "") {
              return product;
            }
          })
          .map((product) => {
            return (
              <div className="col-lg-3 col-sm-4 col-md-4 col-7 offset-md-0 offset-1">
                <ProductCard
                  category={product.category} id={product.id} name={product.name}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default AllProducts;
