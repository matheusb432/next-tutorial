import DoorModel from '../model/door';
import { ModelProps } from '../model/model-props';
import styles from '../styles/Door.module.css';

// ? Alternate version
export default function DoorAlt(props: ModelProps<DoorModel>) {
  const door = props.model;
  const setDoor = props.setModel;

  const selected = door.selected ? styles.selected : '';
  const opened = door.opened ? styles.opened : '';

  function selectDoor() {
    setDoor(door.toggleSelection());
  }

  function openDoor() {
    const newDoor = door.toggleSelection(false);

    setDoor(newDoor.toggleOpen());
  }

  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${selected}`}>
        <div className={`${styles.door} ${opened}`} onClick={selectDoor}>
          <div className={styles.number}>{door.number}</div>
        </div>
        <div className={styles.knob} onClick={openDoor}></div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
