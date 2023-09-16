import React, { useState } from "react";
import "./Css/Navbar.css";
import { Link } from "react-router-dom";
function NavBar() {
  var query = matchMedia("(max-width: 960px)");
  const handleMobile = () => {
    const width = window.innerWidth;
    if (width <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const handleClick = () => setClick(!click);
  const [mobile, setMobile] = useState(false);
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  window.addEventListener("resize", handleMobile);
  window.addEventListener("scroll", handleScroll);
  const newPage = () => {
    scrollToTop(0, 0);
    setTimeout(()=>{
      setClick(false);
    }, 1000)
  };
  return (
    <>
      <div className=" navbar py-4">
        <div className="logo col-lg-12 col-11 text-center">
          <Link to={"/"} className="logo" onClick={newPage}>
            Vogue Closet
          </Link>
        </div>
        <div className="extra">
          <div
            className={
              click && (query.matches || mobile)
                ? "nav-links active"
                : "nav-links py-md-4"
            }
          >
            <div
              className={query.matches || mobile ? "link text-center" : "link"}
            >
              <Link to={"/"} className="router-link" onClick={newPage}>
                Home
              </Link>
              <i className='fas home-i'>&#xf061;</i>
            </div>
            <div
              className={query.matches || mobile ? "link text-center" : "link"}
              onClick={() => {
                const section = document.querySelector(".footer");
                section.scrollIntoView();
              }}
            >
              Contact
              <i className='fas contact-i'>&#xf061;</i>
            </div>
            <div
              className={query.matches || mobile ? "link text-center" : "link"}
            >
              <Link to={"/products"} className="router-link" onClick={newPage}>
                Shop
              </Link>
              <i className='fas shop-i'>&#xf061;</i>
            </div>
            <div
              className={query.matches || mobile ? "link text-center" : "link"}
            >
              Cart
              <i className='fas cart-i'>&#xf061;</i>
            </div>
          </div>
        </div>
        <div className="click">
          <i
            className={click ? "fas fa-times" : "fas fa-bars"}
            onClick={handleClick}
          ></i>
        </div>
        <div
          className={
            show
              ? "arrow arrow-show rounded-circle bg-dark px-2 text-white"
              : "arrow arrow-hide"
          }
        >
          <i className="fa-solid fa-arrow-up" onClick={scrollToTop}></i>
        </div>
      </div>
    </>
  );
}

export default NavBar;
