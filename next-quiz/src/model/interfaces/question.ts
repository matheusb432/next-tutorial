import IAnswerModel from './answer';

export default interface IQuestionModel {
  id: number;
  statement: string;
  answers?: IAnswerModel[];
  answeredCorrectly?: boolean;

  setStatement(statement: string): IQuestionModel;

  setAnswers(answers: IAnswerModel[]): IQuestionModel;

  answerWith(index: number): IQuestionModel;

  shuffleAnswers(): IQuestionModel;

  toObject(): any;
}
