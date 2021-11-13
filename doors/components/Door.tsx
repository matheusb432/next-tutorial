import DoorModel from '../model/door';
import { ModelProps } from '../model/model-props';
import styles from '../styles/Door.module.css';
import Gift from './Gift';

export default function Door(props: ModelProps<DoorModel>) {
  const door = props.model;
  const onChange = props.setModel;

  const selected = door.selected && !door.opened ? styles.selected : '';

  const toggleSelection = () => {
    onChange(door.toggleSelection());
  };

  const openDoor = (e: any) => {
    // * stopPropagation() prevents toggleSelection() from being called.
    // * This is necessary since clicking on the door knob also clicks on
    // * the frame which triggers the toggleSelection() event.
    e.stopPropagation();

    onChange(door.open());
  };

  function renderDoor(): JSX.Element {
    return (
      <>
        <div className={`${styles.door}`}>
          <div className={styles['door-outline']}></div>
          <div className={styles.number}>{door.number}</div>
        </div>
        <div className={styles.knob} onClick={openDoor}>
          <div className={styles.handle}></div>
        </div>
      </>
    );
  }

  function renderGift(): JSX.Element {
    return (
      <div className={styles['gift-area']}>
        <Gift />
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={toggleSelection}>
      <div className={`${styles.frame} ${selected}`}>{door.opened || renderDoor()}</div>
      {door.opened && door.hasGift ? renderGift() : false}
      <div className={styles.floor}></div>
    </div>
  );
}
