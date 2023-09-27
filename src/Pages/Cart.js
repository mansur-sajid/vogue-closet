// CartPage.js

import CartItems from "../Components/CartItems";
import Summary from "../Components/Summary";

const CartPage = () => {
  return(
    <>
    <div className="row col-12">
    <div className="col-md-8 col-12">
      <CartItems/>
    </div>
    <div className="col-md-3 col-12">
      <Summary/>
    </div>
    </div>
    </>
  );
};

export default CartPage;
