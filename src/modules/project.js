export default class Project {
  static idCounter = -1;

  constructor(name) {
    this._id = Project.calcId();
    this._name = name;
    this._items = 0;
    this._active = false;
  }

  static calcId() {
    return ++Project.idCounter;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get items() {
    return this._items;
  }

  get active() {
    return this._active;
  }

  set name(value) {
    this._name = value;
  }

  calcItem() {
    this._items += 1;
  }

  set items(value) {
    console.log(value);
  }
}
