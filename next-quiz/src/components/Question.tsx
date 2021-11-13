import { Answer } from '.';
import { renderList } from '../helpers';
import { QuestionModel } from '../model';
import styles from '../styles/Question.module.css';
import Statement from './Statement';
import Timer from './Timer';

const letters = [
  { value: 'A', color: '#F2C866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#BCE596' },
  { value: 'E', color: '#009688A5' },
  { value: 'F', color: '#FF5722A5' },
  { value: 'G', color: '#689F38A5' },
  { value: 'H', color: '#795548A5' },
];

interface QuestionProps {
  value: QuestionModel;
  timeToAnswer?: number;
  onAnswer: (index: number) => void;
  onTimerComplete: () => void;
}

export default function Question(props: QuestionProps) {
  const question: QuestionModel = props.value;

  function renderAnswers() {
    return question.answers.map((a, i) => {
      return (
        <Answer
          key={`${question.id}-${i}`}
          // ! will refactor later
          // key={i}
          value={a}
          index={i}
          letter={letters[i].value}
          letterBgColor={letters[i].color}
          onAnswer={props.onAnswer}
        />
      );
    });
  }

  function renderAsJson() {
    return renderList(question);
  }

  return (
    <div className={styles.question}>
      <Statement text={question.statement} />
      <Timer
        // ? with an unique key, every question will have it's own instance of a timer
        // ? without this key, the same timer would be used for all the quiz, meaning
        // ? the timer wouldn't be able to reset.
        key={question.id}
        duration={props.timeToAnswer ?? 10}
        onComplete={props.onTimerComplete}
      />
      {renderAnswers()}
    </div>
  );
}
