import { useState } from 'react';
import Card from '../components/Card';
import styles from '../styles/Form.module.css';
import Link from 'next/link';
import NumberInput from '../components/NumberInput';

export default function Form() {
  const [doorQty, setDoorQty] = useState(5);
  const [hasGift, setHasGift] = useState(2);

  function randInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor='#c0392c'>
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            value={doorQty}
            onChange={(newQty) => setDoorQty(newQty)}
            text='Door Qty'
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            value={hasGift}
            onChange={(newHasGift) => setHasGift(newHasGift)}
            text='Gift Door (0 to randomize)'
            isGiftText
          />
        </Card>
        <Card bgColor='#28a085'>
          <Link
            href={`/game/${doorQty}/${hasGift > 0 ? hasGift : randInt(1, doorQty)}`}
            passHref>
            <h2 className={styles.link}>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
