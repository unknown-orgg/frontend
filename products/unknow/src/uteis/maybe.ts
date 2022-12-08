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
  static justIf<T>(condition: boolean, value: T): Maybe<T> {
    return condition ? Maybe.just(value) : Maybe.nothing<T>();
  }
  static prop<T>(object: { [k: string]: T }, key: string): Maybe<T> {
    return new Maybe(object[key]);
  }
  map<F>(func: (value: T) => Maybe<F>): Maybe<F> {
    return this.value !== undefined ? 
      func(this.value) : 
      Maybe.nothing<F>()
  }
}

/* const Just = (x) => ({
  chain: f => f(x),
  emit: () => x,
  map: f => MaybeOf(f(x)),
  fork: (_, g) => g(x),
  isJust: true,
  isNothing: false,
  inspect: () => `Just(${x})`,
});

const Nothing = () => ({
  chain: _ => Nothing(),
  emit: () => Nothing(),
  map: _ => Nothing(),
  fork: (f, _) => f(),
  isJust: false,
  isNothing: true,
  inspect: () => `Nothing`,
});

const MaybeOf = x => x === null || x === undefined || x.isNothing ? Nothing() : Just(x);

const exportMaybe = {
  of: MaybeOf
};

export { 
    exportMaybe as Maybe
} */