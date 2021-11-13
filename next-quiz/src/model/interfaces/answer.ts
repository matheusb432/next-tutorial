export default interface IAnswerModel {
  id?: number;
  text: string;
  isCorrect: boolean;
  isShown?: boolean;

  setText(text: string): IAnswerModel;

  setIsCorrect(isCorrect?: boolean): IAnswerModel;

  setIsShown(isShown?: boolean): IAnswerModel;

  toObject(): any;
}
