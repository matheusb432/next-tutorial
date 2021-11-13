import styles from '../styles/NumberInput.module.css';

interface NumberInputProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
  isGiftText?: boolean;
}

export default function NumberInput(props: NumberInputProps) {
  const giftText = props.isGiftText ? styles['gift-text'] : '';

  const inc = () => props.onChange(props.value + 1);
  const dec = () => props.onChange(props.value - 1);

  return (
    <div className={styles['number-input']}>
      <span className={`${styles.text} ${giftText}`}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={inc}>
          +
        </button>
        <button className={styles.btn} onClick={dec}>
          -
        </button>
      </div>
    </div>
  );
}
