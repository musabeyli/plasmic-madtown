export default function webhookHandler(  req: NextApiRequest,
  res: NextApiResponse<Data>) {
    if (req.method === 'POST') {
        console.log(req.body)   
    }
}