import React, { useEffect, useState } from "react";

const Checkout = () => {
  useEffect(() => {
    fetch("api/keys", {});
  });
  return <div>checkout</div>;
};

export default Checkout;
