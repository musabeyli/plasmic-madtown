import React, { useEffect, useState } from "react";

const Checkout = () => {
  const [publishableKey, setPublishableKey] = useState("");
  useEffect(() => {
    const response = fetch("api/keys", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    // const data = await response.json();
  });

  return <div>checkout</div>;
};

export default Checkout;
