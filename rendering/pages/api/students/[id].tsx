import { NextApiRequest, NextApiResponse } from 'next';
import { Student } from '../../../model/student';

export default function handler(req: NextApiRequest, res: NextApiResponse<Student>) {
  const id = req.query.id;

  res.status(200).json({
    id,
    name: `Reacto Nexter The ${id}rd`,
    email: `rn${id}@geemail.com`,
  });
}
