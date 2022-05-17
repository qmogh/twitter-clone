// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { SanityClient } from '/Users/amoghchaubey/Documents/GitHub/twitter-clone/sanity'

type Data = {
  tweets: Tweet[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  res.status(200).json({ name: 'John Doe' })
}
