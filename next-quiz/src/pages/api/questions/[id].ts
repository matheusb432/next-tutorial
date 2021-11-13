import { NextApiRequest, NextApiResponse } from 'next';

import { QuestionModel } from '../../../model';
import { ApiStatuses } from '../../../model/enums';
import { mockQuestions } from '../mock-database';
import { ApiResponse } from './../../../model/api-response';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionModel | ApiResponse>
): void {
  const id = +req.query.id;

  let question = mockQuestions.find((q) => q.id === id);

  if (question != null) {
    question = question.shuffleAnswers();

    // * question = question.answerWith(0);

    res.status(200).json(question.toObject() as any);
  } else {
    res.status(ApiStatuses.NotFound).send(ApiResponse.notFound(id, 'question'));
  }
}
