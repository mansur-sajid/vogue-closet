import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { useProducts } from "../Hooks/UseProducts";

function CarouselSection() {
  const [mobile, setMobile] = useState(3);
  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 600) {
      setMobile(1);
    } else if (width <= 960) {
      setMobile(2);
    } else {
      setMobile(3);
    }
  }, [mobile]);

  const { data, isLoading } = useProducts();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: mobile,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
  };
  if (isLoading === true) {
    return <Loader />;
  }
  const newPage = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <h2 className="text-center my-5 product">Products</h2>
      <div className="container">
        <div className="col-12 " style={{'overflow':'hidden'}}>
          <Slider {...settings} className="carousel col-12 ml-sm-0">
            {data?.data?.map((product) => {
              return <ProductCard category={product.category} id={product.id} name={product.name}/>;
            })}
          </Slider>
        </div>
      </div>
      <Link to={"/products"} onClick={newPage}>
        <button className="browse my-5 offset-sm-5 col-sm-2 col-4 offset-3">
          Browse More
        </button>
      </Link>
    </>
  );
}

export default CarouselSection;
