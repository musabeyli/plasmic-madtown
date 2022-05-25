// ./utils/get-stripejs.ts
import { Stripe, loadStripe } from "@stripe/stripe-js";
let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    console.log(process.env.STRIPE_PUBLISHABLE_KEY!)
    stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY || "");
  }
  return stripePromise;
};

export default getStripe;