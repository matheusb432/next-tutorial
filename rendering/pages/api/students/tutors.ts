import { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse<number[]>) {
  res.status(200).json([100, 200, 300, 400]);
}
