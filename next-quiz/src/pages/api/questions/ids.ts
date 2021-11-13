import { NextApiRequest, NextApiResponse } from 'next';

import { shuffle } from '../../../utils/utils';
import { jsonQuestions } from '../mock-database';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<number[] | object[]>
): void {
  const ids = jsonQuestions.map((q) => q.id);

  res.status(200).json(shuffle(ids));
}
