import styles from '../styles/Result.module.css';
import { useRouter } from 'next/dist/client/router';
import ResultDisplay from '../components/ResultDisplay';
import { PerformanceNodeTiming } from 'perf_hooks';
import Button from '../components/Button';

// interface ResultQuery {
//   total: string;
//   correct: string;
// }

export default function Result() {
  const router = useRouter();

  const { total, correct } = router.query as any;
  let percent = 0;
  if (total != null && correct != null) {
    console.log('aa');
    percent = Math.round((+correct / +total) * 100);
  }

  function renderResultDisplays() {
    return canRenderResult() ? (
      <>
        <h1>Quiz Result</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ResultDisplay text='Total' value={total} />
          <ResultDisplay text='Correct' value={correct} bgColor='#9cd2a4' />
          <ResultDisplay
            text='Percent'
            value={`${percent}%`}
            bgColor={getPercentBgColor()}
          />
        </div>
      </>
    ) : (
      false
    );
  }

  function canRenderResult() {
    return total != null && correct != null && percent != null;
  }

  function getPercentBgColor() {
    return percent === 100
      ? '#4CAF50'
      : percent >= 80
      ? '#9cd2a4'
      : percent >= 60
      ? '#fdd60f'
      : percent >= 30
      ? '#de6a33'
      : 'red';
  }

  return (
    <div className={styles.result}>
      {renderResultDisplays()}
      <Button href='/' text='Try Again' />
    </div>
  );
}
