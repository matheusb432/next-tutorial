import Link from 'next/link';
import styles from '../../styles/Routes.module.css';
import { useRouter } from 'next/dist/client/router';

export default function Routes() {
  const links = [];
  const madPeople = [
    'scientist',
    'engineer',
    'cs student',
    'philosopher',
    'medic',
    'plumber',
    'physicist',
    'astronomer',
    'dev',
    'hunter',
  ];

  const router = useRouter();

  for (let i = 0; i < 10; i++) {
    links.push(
      <Link
        key={i + 1}
        // ? easy dynamic href, isn't that just neat.
        href={`routes/params?id=${i + 1}&desc=mad ${madPeople[i]} so cool`}
        passHref>
        <li className={styles['li-link']}>mad {madPeople[i]}</li>
      </Link>
    );
  }

  function simpleNavigation(url: string) {
    router.push(url);
  }

  function navigationWithParams(parameters: { [key: string]: string | number | never }) {
    router.push({
      pathname: '/routes/params',
      query: {
        ...parameters,
      },
    });
  }

  return (
    <div>
      <h1>@ routes index</h1>
      <ul>{links}</ul>
      <hr />
      <ul>
        <Link href='/routes/code123/name123' passHref>
          <li className={styles['li-link']}>to [code]/[name]</li>
        </Link>
        <Link href='/routes/code123/search' passHref>
          <li className={styles['li-link']}>to [code]/search</li>
        </Link>
        <Link href='/routes/params' passHref>
          <li className={styles['li-link']}>to params</li>
        </Link>
      </ul>
      <hr />
      <div className='flex-col'>
        <button onClick={() => router.push('/routes/code515/search')}>to code515/search</button>
        <button onClick={() => simpleNavigation('/routes/code213/search')}>
          to code213/search
        </button>
        <button
          onClick={() => navigationWithParams({ id: 123, name: 'rand-name', desc: '123-rand' })}>
          to routes/params
        </button>
      </div>
    </div>
  );
}
