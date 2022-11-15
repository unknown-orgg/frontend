export class Maybe<T> {
  value?: T
  constructor(value?: T) {
    this.value = value;
  }
  static nothing<T>(): Maybe<T> {
    return new Maybe<T>(undefined);
  }
  static just<T>(value: T): Maybe<T> {
    return new Maybe<T>(value);
  }
   /** Try get a property of the `object` with given `key`. */
  static prop<T>(object: { [k: string]: T }, key: string): Maybe<T> {
    return new Maybe(object[key]);
  }
  then<R>(func: (value: T) => Maybe<R>): Maybe<R> {
    return this.value !== undefined ? 
      func(this.value) : 
      Maybe.nothing<R>()
  }
}