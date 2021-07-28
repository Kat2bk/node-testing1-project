const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  // test('[2] returns a copy, leaving the original object intact', () => {})
  it('[2] returns a copy, leaving the original object intact', () => {
    expect(actual).not.toEqual(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  // test('[3] returns an object with the properties trimmed', () => {})
  // test('[4] the object returned is the exact same one we passed in', () => {})
  it('[3] returns an object with the properties trimmed', () => {
    expect(actual).toEqual(expected)
  })
  it('[4] the object returned is the exact same one we passed in', () => {
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  // test('[5] returns the largest number in an array of objects { integer: 2 }', () => {})
  it('[5] returns the largest number in an array of numbers', () => {
    const numbers = [4, 10, 6, 7, 20];
    expect(utils.findLargestInteger(numbers)).toEqual(20);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  // test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {})
  // test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {})
  // test('[8] the count eventually reaches zero but does not go below zero', () => {})
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toEqual(3);
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown();
		expect(counter.countDown()).toEqual(2);
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    for (let i = 1; i < 6; i++) counter.countDown();
		expect(counter.countDown()).toEqual(0);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  // test('[9] the FIRST call of seasons.next returns "summer"', () => {})
  // test('[10] the SECOND call of seasons.next returns "fall"', () => {})
  // test('[11] the THIRD call of seasons.next returns "winter"', () => {})
  // test('[12] the FOURTH call of seasons.next returns "spring"', () => {})
  // test('[13] the FIFTH call of seasons.next returns again "summer"', () => {})
  // test('[14] the 40th call of seasons.next returns "spring"', () => {})
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual('summer');

  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(seasons.next()).toEqual('fall');

  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(seasons.next()).toEqual('winter');
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(seasons.next()).toEqual('spring');
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(seasons.next()).toEqual('summer');
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  // test('[15] driving the car returns the updated odometer', () => {})
  // test('[16] driving the car uses gas', () => {})
  // test('[17] refueling allows to keep driving', () => {})
  // test('[18] adding fuel to a full tank has no effect', () => {})
  it('[15] driving the car returns the updated odometer', () => {
    focus.drive(5);
		expect(focus.odometer).toBe(5);
  })
  
  it('[16] driving the car uses gas', () => {
    focus.drive(30);
		expect(focus.fuel).toBeLessThan(20);
  })

  it('[17] refueling allows to keep driving', () => {
    focus.drive(30 * 20);
		expect(focus.fuel).toEqual(0);
		focus.refuel(20);
		focus.drive(30);
		expect(focus.fuel).toBeGreaterThan(0);
		expect(focus.odometer).toBeGreaterThan(30 * 20);
  })

  it('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(10);
		expect(focus.fuel).toEqual(20);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  // test('[19] resolves true if passed an even number', () => {})
  // test('[20] resolves false if passed an odd number', () => {})
})
