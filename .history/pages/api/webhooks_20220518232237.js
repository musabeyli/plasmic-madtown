import Stripe from "stripe";
import { buffer } from "micro";

export default function webhookHandler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
  }
}
