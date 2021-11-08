import { useCallback, useEffect, useState } from 'react';
import { User } from '../interfaces/user';

export default function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState([]);
  const [renderedUsers, setRenderedUsers] = useState(<></>);

  // * it's almost like ngOnInit() in a way 🤔
  useEffect(() => {
    getUsers();
  }, []);

  // * memoized version of the renderUser function which is more optimized
  // * than simply using the function itself, the function only changes when
  // * the dependencies (in this case, users) changes.
  const renderUsers = useCallback(() => {
    return (
      <ul>
        {users.map(
          (x: User): JSX.Element => (
            <li key={x.id}>
              {x.id} | {x.name} is {x.age} years old
            </li>
          )
        )}
      </ul>
    );
  }, [users]);

  // * With the superpower of useEffect(), the JSX elements of users are only rendered
  // * when setUsers() is called, which is more efficient than simply calling the
  // * renderUsers() function directly in the JSX return of this page, so instead of
  // * rendering these elements whenever a setStateAction() is called, it's only
  // * done so when necessary.
  useEffect(() => {
    setRenderedUsers(renderUsers());
  }, [renderUsers, users]);

  async function getUsers() {
    const res = await fetch('/api/form');
    const usersJson = await res.json();

    setUsers(usersJson);
  }

  async function submitUser() {
    await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify({ name, age }),
    });

    setName('');
    setAge(0);
    await getUsers();
  }

  return (
    <div>
      <h1>Form with stateful values</h1>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <input type='number' value={age} onChange={(e) => setAge(+e.target.value)} />
      <button onClick={() => submitUser()}>submit user</button>
      {/* // ? Efficient */}
      {renderedUsers}

      {/* // ! Inneficient
      {renderUsers()} */}
    </div>
  );
}
