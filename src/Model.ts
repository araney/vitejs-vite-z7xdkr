export default class Model {
  private _id: string;
  readonly name: string;

  constructor(id: string, name: string) {
    this._id = id;
    this.name = name;
  }

  get id() {
    return this._id;
  }
}
