import { NextApiRequest, NextApiResponse } from 'next';

import { IQuestionModel } from '../../../model/interfaces';
import { jsonQuestions } from '../mock-database';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IQuestionModel | object[]>
): void {
  res.status(200).json(jsonQuestions ?? []);
}
