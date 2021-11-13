import styles from '../styles/Card.module.css';

interface CardProps {
  bgColor?: string;
  children?: any;
}

export default function Card(props: CardProps) {
  const bgColor = props.bgColor ?? '#fff';

  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: bgColor,
      }}>
      {props.children}
    </div>
  );
}
