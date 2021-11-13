import { QuestionModel } from '../model';

export function canAnswer(question: QuestionModel): boolean {
  return !question.answered;
}
