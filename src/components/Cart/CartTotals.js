import React from "react";
import { Link } from "react-router-dom";

function CartTotals({ value }) {
  const { cartTotal, cartSubTotal, cartTax, clearCart } = value;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => clearCart()}
            >
              clear cart
            </button>
          </Link>
          <h5>
            <span className="text-title">subtotal:</span>
            <strong>$ {cartSubTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">taxtotal:</span>
            <strong>$ {cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">total:</span>
            <strong>$ {cartTotal}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default CartTotals;
