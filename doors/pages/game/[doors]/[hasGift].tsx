import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

import Door from '../../../components/Door';
import {
  createDoors,
  isValidDoorQuantity,
  isValidGiftPosition,
  updateDoors,
} from '../../../functions/doors';
import DoorModel from '../../../model/door';
import { Rules } from '../../../model/rules.enum';
import styles from '../../../styles/Game.module.css';

export default function Game() {
  const [doors, setDoors]: [any, Dispatch<SetStateAction<any>>] = useState([]);
  const [renderedDoors, setRenderedDoors] = useState([<div key={0}></div>]);
  const router = useRouter();

  const renderDoors = useCallback(() => {
    return doors.map((d: DoorModel, i: number) => {
      return (
        <Door
          key={d?.number}
          model={d}
          setModel={(newDoor: DoorModel) => {
            setDoors(updateDoors(newDoor, doors));
          }}
        />
      );
    });
  }, [doors]);

  useEffect(() => {
    if (router?.query?.doors) {
      const queryDoors: any = router.query.doors;
      const queryHasGift: any = router.query.hasGift;

      const length = isValidDoorQuantity(queryDoors) ? +queryDoors : Rules.MinimumDoors;

      const hasGift = isValidGiftPosition(queryHasGift, length)
        ? +queryHasGift
        : Rules.DefaultGiftPosition;

      setDoors(createDoors(length, hasGift));
    }
  }, [router?.query]);

  useEffect(() => {
    setRenderedDoors(renderDoors());
  }, [doors, renderDoors, router?.query]);

  return (
    <div className={styles.game}>
      <div className={styles.doors}>{renderedDoors}</div>
      <div className={styles.buttons}>
        <Link href='/' passHref>
          <button>Restart Game</button>
        </Link>
      </div>
    </div>
  );
}
