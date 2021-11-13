import { IAnswerModel } from './interfaces';

export default class AnswerModel implements IAnswerModel {
  private _id?: number;
  private _text: string;
  private _isCorrect: boolean;
  private _isShown: boolean;

  constructor(text: string, isCorrect: boolean, isShown: boolean = false, id?: number) {
    this._text = text;
    this._isCorrect = isCorrect;
    this._isShown = isShown;
    if (id) this._id = id;
  }

  static correct(text: string) {
    return new AnswerModel(text, true);
  }

  static wrong(text: string) {
    return new AnswerModel(text, false);
  }

  get id() {
    return this._id;
  }

  get text() {
    return this._text;
  }

  get isCorrect() {
    return this._isCorrect;
  }

  get isShown() {
    return this._isShown;
  }

  setText(text: string) {
    return new AnswerModel(text, this.isCorrect, this.isShown, this.id);
  }

  setIsCorrect(isCorrect: boolean = true) {
    return new AnswerModel(this.text, isCorrect, this.isShown, this.id);
  }

  setIsShown(isShown: boolean = true) {
    return new AnswerModel(this.text, this.isCorrect, isShown, this.id);
  }

  static fromObject(obj: AnswerModel): AnswerModel {
    return new AnswerModel(obj.text, obj.isCorrect, obj.isShown);
  }

  toObject() {
    return {
      text: this._text,
      isCorrect: this._isCorrect,
      isShown: this._isShown,
      id: this._id,
    };
  }
}
