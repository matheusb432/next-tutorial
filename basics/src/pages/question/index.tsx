import { useEffect, useState } from 'react';
import { QuestionData } from '../../interfaces/question-data';

export default function Question() {
  const [quest, setQuestion] = useState(null as unknown as QuestionData);

  // ! fetch() needs to be in a useEffect(() => {}, []) hook
  // ! or else it will run this code infinite times
  useEffect(() => {
    fetch('http://localhost:3000/api/question/1424')
      .then((res) => res?.json())
      // * shorhand for .then((json) => setQuestion(json));
      .then(setQuestion);
  }, []);
  // * adding the [] to the useEffect() dependencies will guarantee it will only run once,
  // * which is when the component is initialized, this prevents an infinite loop that triggers
  // * whenever a setStateAction() is called.

  function renderQuestion() {
    return (
      <>
        <h2>
          {quest?.id} - {quest?.statement}
        </h2>
        <ul>
          {quest?.answers.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <div>
      <h1>The integrated API response is:</h1>
      <h3>{JSON.stringify(quest)}</h3>
      <hr />
      <h1>Question: </h1>
      {renderQuestion()}
    </div>
  );
}
