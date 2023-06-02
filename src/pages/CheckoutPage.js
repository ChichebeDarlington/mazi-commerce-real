import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero
        title="checkout"
        subtitle="This page will direct you to the checkout"
      />
      <h1>checkout here</h1>
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
