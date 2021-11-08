import type { NextApiRequest, NextApiResponse } from 'next';

export default function optionalData(req: NextApiRequest, res: NextApiResponse<object>) {
  res.status(200).json({
    params: req.query,
  });
}
