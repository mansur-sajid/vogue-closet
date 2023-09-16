import React from "react";
import Location from "./Location";

function Footer() {
  const shake = (event) => {
    event.currentTarget.classList.toggle("fa-bounce");
  };
  return (
    <footer className=" col-12 py-5 px-5 mt-5 text-white footer">
      <div className="row">
        <div className="col-md-3">
          <h1>Fashion that fits your lifestyle.</h1>
        </div>
        <Location
          city="Lahore"
          email="vouguelhr@gmail.com"
          phone="+923398570173"
          address="Nishter Road Chowk Dalgrian"
        />
        <Location
          city="Karachi"
          email="vouguekhi@gmail.com"
          phone="+923418456109"
          address="Johar Chorangi Gulistan-e-Johar"
        />
        <div className="col-md-3 mt-md-0 mt-3">
          <h6>STAY UPDATED</h6>
          <p className="news">
            Signup For NewsLetter <i className="fa-solid fa-arrow-right"></i>
          </p>
          <p>Follow Us</p>
          <div className="socials">
            <i
              className="fa-brands fa-instagram fa-lg"
              onMouseEnter={shake}
              onMouseLeave={shake}
            ></i>
            <i
              className="fa-brands fa-facebook fa-lg"
              onMouseEnter={shake}
              onMouseLeave={shake}
            ></i>
            <i
              className="fa-brands fa-linkedin fa-lg"
              onMouseEnter={shake}
              onMouseLeave={shake}
            ></i>
            <i
              className="fa-brands fa-whatsapp fa-lg"
              onMouseEnter={shake}
              onMouseLeave={shake}
            ></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
