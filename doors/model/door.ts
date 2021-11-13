export default class DoorModel {
  #number: number;
  #hasGift: boolean;
  #selected: boolean;
  #opened: boolean;

  constructor(number: number, hasGift = false, selected = false, opened = false) {
    this.#number = number;
    this.#hasGift = hasGift;
    this.#selected = selected;
    this.#opened = opened;
  }

  get number() {
    return this.#number;
  }

  get hasGift() {
    return this.#hasGift;
  }

  get selected() {
    return this.#selected;
  }

  get opened() {
    return this.#opened;
  }

  includeGift() {
    return new DoorModel(this.number, true, this.selected, this.opened);
  }

  select() {
    return new DoorModel(this.number, this.hasGift, true, this.opened);
  }

  toggleSelection(value?: boolean) {
    const selected = value ?? !this.selected;

    return new DoorModel(this.number, this.hasGift, selected, this.opened);
  }

  open() {
    return new DoorModel(this.number, this.hasGift, this.selected, true);
  }

  toggleOpen() {
    const opened = !this.opened;

    return new DoorModel(this.number, this.hasGift, this.selected, opened);
  }
}
