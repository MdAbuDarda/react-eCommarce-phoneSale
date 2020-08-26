import React, { Component } from "react";
import CartColumns from "./CartColumns";
import Title from "../Title";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export class Cart extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            console.log(cart.length);
            if (cart.length > 0) {
              return (
                <>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
<CartTotals value={value} />
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Cart;
