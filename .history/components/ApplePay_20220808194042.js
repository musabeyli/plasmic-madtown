import React from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

const ApplePay = () => {
  const pr = stripe.paymentRequest({
    currency: "usd",
    country: "US",
    requestPayerEmail: true,,
    requestPayerName: true,
    total: {
        label: 'Demo Payment'
    }
  });
};
