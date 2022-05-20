import Stripe from "stripe";
import { buffer } from "micro";

export const config = {
  api: {
    bodyParser: false,
  }]
}
export default function webhookHandler(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  if (req.method === "POST") {
    const buf = await buffer(req)
    console.log(req.body);
  }
}
