import React, { useEffect, useState } from "react";

const Checkout = () => {
  useEffect(() => {
    fetch("api/keys", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  });
  return <div>checkout</div>;
};

export default Checkout;
