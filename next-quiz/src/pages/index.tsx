import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef, useState } from 'react';
import { finished } from 'stream';
import { Question } from '../components';
import Button from '../components/Button';
import Quiz from '../components/Quiz';
import { canAnswer } from '../functions/questions';
import { QuestionModel } from '../model';
import styles from '../styles/Home.module.css';
import { mockQuestions } from './api/mock-database';

const BASE_URL = 'http://localhost:3000/api';
const QUESTIONS_URL = `${BASE_URL}/questions`;

const Home: NextPage = () => {
  // const [question, setQuestion] = useState<QuestionModel>(mockQuestions[0]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [questionIds, setQuestionIds] = useState<number[]>([]);
  const [idIndex, setIdIndex] = useState<number>(0);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    loadQuestionIds();
  }, []);

  useEffect(() => {
    setIdIndex(0);
  }, [questionIds]);

  useEffect(() => {
    if (questionIds?.length > 0) {
      if (idIndex < questionIds.length - 1) {
        loadQuestion(questionIds[idIndex]);
      } else if (idIndex === questionIds.length - 1) {
        loadQuestion(questionIds[idIndex]);

        setIsLast(true);
      }
      // else {
      //   finishQuiz();
      // }
    }
  }, [idIndex, questionIds]);

  async function loadQuestionIds(): Promise<void> {
    const res = await fetch(`${QUESTIONS_URL}/ids`);
    const jsonIds = await res.json();

    setQuestionIds(jsonIds);
  }

  async function loadQuestion(id: number): Promise<void> {
    if (id == null) {
      return;
    }

    const res = await fetch(`${QUESTIONS_URL}/${id}`);
    const jsonQuestion = await res.json();
    const newQuestion = QuestionModel.fromObject(jsonQuestion);

    setQuestion(newQuestion);
  }

  function renderQuiz(): JSX.Element {
    return (
      <Quiz
        question={question as QuestionModel}
        isLast={isLast}
        answerQuestion={answerQuestion}
        goToNext={goToNext}
      />
    );
  }

  // console.log(questionIds);
  // console.log(question);

  function answerQuestion(answeredQuestion: QuestionModel): void {
    // console.log(answeredQuestion);
    setQuestion(answeredQuestion);

    const gotItRight = answeredQuestion.answeredCorrectly;

    setCorrectAnswers(correctAnswers + (gotItRight ? 1 : 0));
  }

  function goToNext(): void {
    if (isLast) {
      finishQuiz();

      return;
    }

    setIdIndex(idIndex + 1);
  }

  function finishQuiz() {
    console.log('finishing quiz');

    // router.push('/result');
    router.push({
      pathname: '/result',
      query: {
        total: questionIds.length,
        correct: correctAnswers,
      },
    });
  }

  // console.log(correctAnswers);

  return (
    <>{question ? renderQuiz() : false}</>
    // <>
    //   <Quiz
    //     question={question as QuestionModel}
    //     isLast={isLast}
    //     answerQuestion={answerQuestion}
    //     goToNext={goToNext}
    //   />
    // </>
  );
};

export default Home;
