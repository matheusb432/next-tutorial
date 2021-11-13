import { AnswerModel, QuestionModel } from '../../model';

const mockQuestions: QuestionModel[] = [
  new QuestionModel(306, 'What is 3+6', [
    AnswerModel.wrong('12'),
    AnswerModel.wrong('5'),
    AnswerModel.wrong('7'),
    AnswerModel.correct('The answer is => 9'),
  ]),
  new QuestionModel(202, 'What is 2+2', [
    AnswerModel.wrong('2'),
    AnswerModel.wrong('1'),
    AnswerModel.wrong('7'),
    AnswerModel.correct('The answer is => 4'),
  ]),
  new QuestionModel(203, 'What is 2+3', [
    AnswerModel.wrong('2'),
    AnswerModel.wrong('1'),
    AnswerModel.wrong('7'),
    AnswerModel.correct('The answer is => 5'),
  ]),
  new QuestionModel(204, 'What is 2+4', [
    AnswerModel.wrong('2'),
    AnswerModel.wrong('1'),
    AnswerModel.wrong('7'),
    AnswerModel.correct('The answer is => 6'),
  ]),
];

const jsonQuestions = mockQuestions.map((q) => q.toObject());

export { mockQuestions, jsonQuestions };
