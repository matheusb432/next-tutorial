import DoorModel from '../model/door';
import { Rules } from '../model/rules.enum';

export function createDoors(length: number, giftDoor: number): DoorModel[] {
  if (giftDoor > length || giftDoor < 1) {
    throw Error('Invalid selected door');
  }

  const doors = Array.from({ length }, (_, i) => new DoorModel(i + 1));

  doors[giftDoor - 1] = doors[giftDoor - 1].includeGift();

  return doors;
}

export function updateDoors(modifiedDoor: DoorModel, doors: DoorModel[]): DoorModel[] {
  const index = doors.findIndex((d) => d.number === modifiedDoor.number);

  if (modifiedDoor == null) {
    throw Error('Unable to find door');
  }

  if (doors[index].selected !== modifiedDoor.selected && !modifiedDoor.opened) {
    return selectDoor(index, doors);
  }

  doors[index] = modifiedDoor;

  return doors.map((d) => d);
}

export function selectDoor(index: number, doors: DoorModel[]): DoorModel[] {
  return doors.map((d, i) => d.toggleSelection(i === index && !d.selected));
}

export function isValidDoorQuantity(qty: string | string[]) {
  return qty != null && +qty >= Rules.MinimumDoors;
}

export function isValidGiftPosition(pos: string | string[], doorsAmount: number) {
  return pos != null && +pos <= doorsAmount && +pos > 0;
}
