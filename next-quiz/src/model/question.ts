import { shuffle } from '../utils/utils';
import AnswerModel from './answer';
import { IQuestionModel } from './interfaces';

export default class QuestionModel implements IQuestionModel {
  private _id: number;
  private _statement: string;
  private _answers: AnswerModel[];
  private _answeredCorrectly: boolean;

  constructor(
    id: number,
    statement: string,
    answers: AnswerModel[] = [],
    answeredCorrectly: boolean = false
  ) {
    this._id = id;
    this._statement = statement;
    this._answers = answers;
    this._answeredCorrectly = answeredCorrectly;
  }

  get id() {
    return this._id;
  }

  get statement() {
    return this._statement;
  }

  get answers() {
    return this._answers;
  }

  get answeredCorrectly() {
    return this._answeredCorrectly;
  }

  // ? answered is a getter without a property, since it can be directly inferred by the answers data.
  get answered() {
    return this.answers.some((a) => a.isShown);
  }

  setStatement(statement: string) {
    return new QuestionModel(this.id, statement, this.answers, this.answeredCorrectly);
  }

  setAnswers(answers: AnswerModel[]) {
    return new QuestionModel(this.id, this.statement, answers, this.answeredCorrectly);
  }

  answerWith(index: number): QuestionModel {
    const isCorrectAnswer = this.answers[index]?.isCorrect;

    // if (isCorrectAnswer == null) {
    //   throw Error('Invalid answer');
    // }

    const answers = this.answers.map((ans: AnswerModel, i) => {
      const isSelectedAnswer = index === i;

      const shouldShow = isSelectedAnswer || ans.isCorrect;

      return shouldShow ? ans.setIsShown() : ans;
    });

    return new QuestionModel(this.id, this.statement, answers, isCorrectAnswer);
  }

  shuffleAnswers(): QuestionModel {
    return new QuestionModel(
      this.id,
      this.statement,
      shuffle(this.answers),
      this.answeredCorrectly
    );
  }

  static fromObject(obj: QuestionModel): QuestionModel {
    const answers = obj.answers.map((a) => AnswerModel.fromObject(a));

    return new QuestionModel(obj.id, obj.statement, answers, obj.answeredCorrectly);
  }

  toObject() {
    return {
      id: this.id,
      statement: this.statement,
      answers: this.answers.map((a) => a.toObject()),
      answeredCorrectly: this.answeredCorrectly,
    };
  }
}
