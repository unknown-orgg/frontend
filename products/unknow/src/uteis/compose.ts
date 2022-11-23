type ArityOneFn<T = any> = (arg: T) => T;
type ArityOneFnPromise<T = any> = (arg: T) => Promise<T>
export class Compose {
  constructor() {
  }
  static composeRegular<R = any>(...fns: ArityOneFn[]) {
    return function (p: R) {
      return fns.reduceRight((acc, cur) => cur(acc), p)
    }
  }
  static composePromise<R extends Promise<R>>() {
    return (...ms: ArityOneFnPromise[]) => {
      ms.reduceRight((f, g) => x => g(x).then(f))
    }
  }
}
