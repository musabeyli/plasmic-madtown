import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  publishableKey: string
}


export default function webhookHandler(  req: NextApiRequest,
  res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        console.log(req.body)   
    }
}