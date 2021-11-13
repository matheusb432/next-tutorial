import styles from '../styles/Gift.module.css';

export default function Gift() {
  return (
    <div className={styles.gift} onClick={() => alert('Victory >:)')}>
      <div className={styles.cover}></div>
      <div className={styles.box}></div>
      <div className={styles.laceY}></div>
      <div className={styles.laceX}></div>
    </div>
  );
}
