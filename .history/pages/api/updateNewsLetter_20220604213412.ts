import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
      res.status(200).json({publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || ""});
  } 
  else {
      res.status(405).end("Method not allowed")
  }
}