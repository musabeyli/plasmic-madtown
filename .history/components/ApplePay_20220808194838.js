import React from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

const ApplePay = () => {
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    const pr = stripe.paymentRequest({
      currency: "usd",
      country: "US",
      requestPayerEmail: true,
      requestPayerName: true,
      total: {
        label: "Demo Payment",
        amount: 1999,
      },
    });
  }, []);
};
