import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "./../../utils/connection"

export default async function updateEmail(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            await connectToDatabase()
            const body: IPost = JSON.parse(req.body)
            const newPost = new Post(body)
            const saved = await newPost.save()
            res.send(saved)
        } catch (err) {
            console.log(err)
            res.status(500).send("error")
        }
    } else {
        res.status(405).json({ messagge: "Method not allowed" })
    }

}