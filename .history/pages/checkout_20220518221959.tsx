import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const Checkout = () => {
  const [publishableKey, setPublishableKey] = useState("");
  useEffect(() => {
    const response = fetch("api/keys", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setPublishableKey(data.publishableKey);
      });
    // const data = await response.json();
  });

  return <div>checkout</div>;
};

export default Checkout;
