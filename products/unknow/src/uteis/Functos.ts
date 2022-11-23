
interface Functor {
	fmap: (...args: any) => any;
}

interface Monad extends Functor {
	bind: (...args: any) => Monad;
}

interface Maybe extends Monad {
}

export class Just implements Maybe {
	private value: any;
	constructor(a: any) {
		this.value = a
	}
  static get [Symbol.species]() {
    return this;
  }
	fmap (f: (...args: any) => Just): Just {
		return new Just(f(this.value))
	}
	bind (f: (...args: any) => Maybe): Maybe {
		return f(this.value)
	}
  fork (g: (...args: any) => Just) {
    return g(this.value)
  }
}

export class Nothing implements Maybe {
	fmap (f: (...args: any) => any): Nothing {
		return this
	}
	bind (f: (...args: any) => Maybe): Maybe {
		return this
	}
  fork (g: (...args: any) => Just) {
    return g()
  }
}
