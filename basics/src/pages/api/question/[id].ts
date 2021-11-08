import { NextApiRequest, NextApiResponse } from 'next';
import { QuestionData } from '../../../interfaces/question-data';

export default function question(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const id = req.query.id;

    res.status(200).json({
      id,
      statement: 'Whats your favorite color?',
      answers: ['white', 'red', 'green', 'yellow'],
    } as QuestionData);
  } else {
    res.status(405).send({});
    // req.status(405).send()
  }
}
