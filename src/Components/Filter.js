import React, { useState } from "react";
import "./Css/Filter.css";
import AllProducts from "./AllProducts";
function Filter() {
  const shake = (event) => {
    event.currentTarget.classList.toggle("fa-bounce");
  };
  const [ishake, setIshake] = useState("fa fa-thin fa-filter");
  const [open, setOpen] = useState(false);
  var [category, setCategory] = useState("");
  return (
    <>
      <div className="col-12 filter text-center">
        <i
          className={"fa fa-thin fa-filter" + ishake}
          onMouseEnter={shake}
          onMouseLeave={shake}
        ></i>
        <p
          onClick={() => {
            setOpen(!open);
          }}
          onMouseEnter={() => {
            setIshake("fa fa-thin fa-filter fa-bounce");
          }}
          onMouseLeave={() => {
            setIshake("fa fa-thin fa-filter");
          }}
        >
          {" "}
          Categories
        </p>
      </div>
      <div className={open ? "catActive text-center" : "categories"}>
        <i
          className="fas fa-2x fa-times close"
          onClick={() => setOpen(false)}
        ></i>
        <ul>
          <li key={"clear"} onClick={() => setCategory("")}>
            Clear Filter
          </li>
          <li key={"shirt"} onClick={() => setCategory("shirt")}>
            Shirts
          </li>
          <li key={"pant"} onClick={() => setCategory("pant")}>
            Pants
          </li>
          <li key={"dress"} onClick={() => setCategory("dress")}>
            Dress
          </li>
          <li key={"jacket"} onClick={() => setCategory("jacket")}>
            Jackets
          </li>
          <li key={"footwear"} onClick={() => setCategory("footwear")}>
            Footwear
          </li>
          <li key={"other"} onClick={() => setCategory("other")}>
            Other Accessories
          </li>
        </ul>
      </div>
      <AllProducts cat={category} />
    </>
  );
}

export default Filter;
