import styles from '../styles/Answer.module.css';
import { AnswerModel } from '../model';

interface AnswerProps {
  value: AnswerModel;
  index: number;
  letter: string;
  letterBgColor: string;
  onAnswer: (index: number) => void;
}

export default function Answer(props: AnswerProps) {
  const answer = props.value;
  const shownAnswer = answer.isShown ? styles['shown-answer'] : '';
  function renderAnswerStatement(): JSX.Element {
    return (
      <div className={styles.front}>
        <div className={styles.letter} style={{ backgroundColor: props.letterBgColor }}>
          {props.letter}
        </div>
        <div className={styles.value}>{answer.text}</div>
      </div>
    );
  }

  function renderAnswerCard(): JSX.Element {
    // return answer.isShown ? renderAnswerResult() : renderAnswerStatement();
    return (
      <>
        {renderAnswerStatement()}
        {renderAnswerResult()}
      </>
    );
  }

  function renderAnswerResult(): JSX.Element {
    return (
      <div className={styles.back}>
        <div className={answer.isCorrect ? styles.correct : styles.wrong}>
          <span>{answer.isCorrect ? 'The correct answer is...' : 'Incorrect answer!'}</span>
          <div className={styles.value}>{answer.text}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.answer} onClick={() => props.onAnswer(props.index)}>
      <div className={`${shownAnswer} ${styles['answer-content']}`}>
        {/* <div className={styles['answer-content']}> */}
        {renderAnswerCard()}
        {/* <div className={styles.front}>
          <div className={styles.letter} style={{ backgroundColor: props.letterBgColor }}>
            {props.letter}
          </div>
          <div className={styles.value}>{answer.text}</div>
        </div>
        <div className={styles.back}>{renderAnswerResult()}</div> */}
      </div>
    </div>
  );
}
