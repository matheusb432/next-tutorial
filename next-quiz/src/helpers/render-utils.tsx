import styles from '../styles/RenderList.module.css';

/**
 * Takes in an object and converts it to a JSON-like JSX element
 * @param object the object to convert
 * @param elKey the unordered list element key
 *
 * @returns a JSX element composed of unordered lists that resembles a JSON object
 */
export function renderList<T>(object: T, elKey?: number): JSX.Element {
  return (
    <ul className={styles['json-list']} key={elKey}>
      <span className={styles['bracket-syntax']}>{'{'}</span>
      {renderItems(object)}
      <span className={styles['bracket-syntax']}>{'}'}</span>
    </ul>
  );
}

export function renderItems<T>(object: T): JSX.Element[] {
  return Object.keys(object).map((key: string, i: number): JSX.Element => {
    let prop: any = object[key as keyof T];

    if (Array.isArray(prop)) {
      prop = (
        <>
          {'['}
          {prop.map((p, j) => renderList(p, i * 100 + j))}
          {']'}
        </>
      );
    } else if (typeof prop === 'string') {
      prop = `"${prop}"`;
    } else {
      prop = `${prop}`;
    }

    return (
      <li className={styles['json-item']} key={i}>
        <span className={styles['prop']}>{`"${key}"`}:</span>{' '}
        <span className={styles['value']}>
          {prop}
          {comma()}
        </span>
      </li>
    );
  });
}

function comma() {
  return <span className={styles['comma-syntax']}>,</span>;
}
