import React from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

const ApplePay = () => {
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {}, []);
};
