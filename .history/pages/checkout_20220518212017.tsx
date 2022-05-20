import React, { useEffect, useState } from "react";

const Checkout = () => {
  useEffect(() => {
    fetch("api/keys", {
      method: "GET",
    });
  });
  return <div>checkout</div>;
};

export default Checkout;
