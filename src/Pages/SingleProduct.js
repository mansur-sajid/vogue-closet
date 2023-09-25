import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import "../Components/Css/SingleProduct.css";
import { useProduct } from "../Hooks/UseProduct";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Swal from "sweetalert2";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function SingleProduct() {
  const [option, setOption] = useState('');
  var icon = useRef(null)

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  var { id, category } = useParams();
  var { data, isLoading } = useProduct(id);
  const [img, setImg] = useState(1);
  var clicked1 = useRef(null);
  var clicked2 = useRef(null);
  var clicked3 = useRef(null);
  const showImage = (event) => {
    var image = event.target.getAttribute("val");
    var css = "1px solid gray";
    setImg(image);
    if (image == 1) {
      clicked1.current.style.border = css;
      clicked1.current.style.opaticty = 1;
    } else {
      clicked1.current.style.border = "none";
      clicked1.current.style.backgroundImage  = "linear-gradient(to bottom, rgba(255,255,255,0.8) 0%,rgba(255,255,255,0.8) 100%)";
    }
    if (image == 2) {
      clicked2.current.style.border = css;
      clicked1.current.style.backgroundImage = "none";
    } else {
      clicked2.current.style.border = "none";
      clicked2.current.style.opaticty = 0.3;
    }
    if (image == 3) {
      clicked3.current.style.opaticty = 1;
      clicked3.current.style.border = css;
    } else {
      clicked3.current.style.border = "none";
      clicked3.current.style.opaticty = 0.3;
    }
  };
  if (isLoading) {
    return (
      <div className="product-loader">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <div className="container porduct-detail row">
        <div className="col-lg-5 col-12 product-image">
          <div className="col-8 display-image offset-md-2 offset-1">
            <img
              src={require("../ProductImages/" +
                category +
                "/" +
                id +
                "/img" +
                img +
                ".jpg")}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-4 side-images mt-3">
            <img
              ref={clicked1}
              src={require("../ProductImages/" +
                category +
                "/" +
                id +
                "/img1.jpg")}
              alt=""
              onClick={showImage}
              val={1}
              style={{ border: "1px solid gray" }}
            />
            <img
              ref={clicked2}
              src={require("../ProductImages/" +
                category +
                "/" +
                id +
                "/img2.jpg")}
              alt=""
              onClick={showImage}
              val={2}
              className=""
            />
            <img
              ref={clicked3}
              src={require("../ProductImages/" +
                category +
                "/" +
                id +
                "/img3.jpg")}
              alt=""
              onClick={showImage}
              val={3}
              className=""
            />
          </div>
        </div>
        <div className="product-details col-lg-6 col-12">
          <h1 className="product-name">{data?.data?.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            veniam quidem earum doloribus sequi? Earum itaque sed porro fugit
            obcaecati odit, illo molestiae voluptatum iure delectus vero,
            voluptates omnis. Necessitatibus quaerat deleniti, vel sequi non
            nulla dolorem excepturi quibusdam rem sint perspiciatis doloremque
            beatae nesciunt assumenda! Aliquam consequuntur quae a!
          </p>
          <p>{data?.data?.optionstype}s:</p>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-helper-label">{data?.data?.optionstype}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={option}
          label="Age"
          onChange={handleChange}
        >
          {
            data?.data?.options.map(option=>{
              return <MenuItem value={option}>{option}</MenuItem>
            })
          }
        </Select>
      </FormControl>
      <button className="btn btn-dark mt-2 addToCartButton pl-0" onClick={(event)=>{
        Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          customClass: 'swal-wide',
          title: 'Product added to cart',
          showConfirmButton: false,
          timer: 1500
        })
        event.target.disabled = true
        
        
        icon.current.classList.add("iconanimation")
      }}>Add To Cart <ShoppingCartIcon className="cartbuttonicon" ref={icon}/> </button>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
