import { NextApiRequest, NextApiResponse } from 'next'
import Router, {useRouter} from 'next/router';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(  
    req: NextApiRequest,
    res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      stripe.checkout
          const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card','wallet'],
          allow_promotion_codes: true,
          shipping_address_collection: {
			      allowed_countries: ['US']
		      },
              shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            
            currency: 'usd',
          },
          display_name: 'Free shipping',
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          }
        }
      },
    ],
        line_items: [
          {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1LMDMSLZ8TMriulmm899tlQ4',
          quantity: req.body.amount,
          },
        ],
      mode: 'payment',
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.status(200).json(session);
      // res.redirect(303, session.url);
    } catch (err : any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}