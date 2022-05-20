import React, { useEffect, useState } from "react";

const Checkout = () => {
  useEffect(() => {
    const response = fetch("api/keys", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
  });

  return <div>checkout</div>;
};

export default Checkout;
