import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

const ApplePay = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState(null);
  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }
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
    pr.canMakePayment().then((result) => {
      if (result) {
        //show some button
        setPaymentRequest(pr);
      }
    });
  }, [stripe, elements]);
};
return (
  <>
    <PaymentRequestButtonElement />
  </>
);
