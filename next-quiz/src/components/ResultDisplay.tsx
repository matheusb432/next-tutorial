import styles from '../styles/ResultDisplay.module.css';

interface ResultDisplayProps {
  value: any;
  text: string;
  color?: string;
  bgColor?: string;
}

export default function ResultDisplay(props: ResultDisplayProps) {
  return (
    <div className={styles['result-display']}>
      <div
        className={styles.value}
        style={{
          backgroundColor: props.bgColor ?? '#fdd60f',
          color: props.color ?? '#333',
        }}>
        {props.value}
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
