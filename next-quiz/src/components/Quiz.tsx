import { Question } from '.';
import { QuestionModel } from '../model';
import styles from '../styles/Quiz.module.css';
import Button from './Button';

interface QuizProps {
  question: QuestionModel;
  isLast: boolean;
  answerQuestion: (q: QuestionModel) => void;
  goToNext: () => void;
}

export default function Quiz(props: QuizProps) {
  function onAnswer(index: number) {
    if (!props.question.answered) {
      props.answerQuestion(props.question.answerWith(index));
    }
  }

  function renderQuestion() {
    return props.question ? (
      <Question
        value={props.question}
        timeToAnswer={6}
        onAnswer={onAnswer}
        onTimerComplete={props.goToNext}
      />
    ) : (
      false
    );
  }

  return (
    <div className={styles.quiz}>
      {renderQuestion()}
      {/* <Question
        value={props.question}
        timeToAnswer={6}
        onAnswer={onAnswer}
        onTimerComplete={props.goToNext}
      /> */}
      <Button onClick={props.goToNext} text={props.isLast ? 'Finish' : 'Next'} />
    </div>
  );
}
