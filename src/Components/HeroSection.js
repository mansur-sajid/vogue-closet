import React from "react";
import "./Css/HeroSection.css";
import { Link } from "react-router-dom";
import image from '../Images/hero1.jpg'

function HeroSection() {
  const newPage = () => window.scrollTo(0, 0); 
  window.addEventListener("load", newPage)
  return (
    <>
      <div className="container herosection col-12 py-4 text-white">
        <div className="row">
          <div className="col-lg-5 offset-lg-1 pb-lg-0 pb-4">
            <h2>Unilimited Options</h2>
            <p>
              Vogue Closet, the trailblazing clothing brand, is synonymous with
              endless style possibilities. Their collection is a testament to
              their commitment to personalization and individual expression.
              With an array of customizable choices, from fabrics and colors to
              cuts and embellishments, Vogue Closet empowers customers to craft
              garments that truly reflect their unique taste and personality.
              This innovative concept transforms shopping into a creative
              journey, where every piece becomes a canvas for self-expression.
              The collection at Vogue Closet is a celebration of diversity and
              individuality, ensuring that every customer can curate a wardrobe
              that feels exclusively theirs. Step into the world of limitless
              fashion with Vogue Closet and embrace the joy of crafting your own
              signature style.
            </p>
            <Link to={"/products"}>
              <button
                className="browse my-2 offset-sm-0 col-sm-2 col-4 offset-3"
                onClick={newPage}
              >
                Browse Products
              </button>
            </Link>
          </div>
          <div className="image col-lg-6">
            <img src={image} alt=""  className="img-fluid"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
