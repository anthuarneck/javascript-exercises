const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Anthony', () => {
    expect(values.firstName).toEqual('Anthony');
  });
  test('lastName is Huarneck', () => {
    expect(values.lastName).toEqual('Huarneck');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1994', () => {
    expect(values.birthYear).toEqual(1994);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello, my name is Anthony Huarneck. I am 31 years old!');
  });
});

describe('step 3', () => {
  test('fullName is Anthony Huarneck', () => {
    expect(values.fullName).toEqual('Anthony Huarneck');
  });
  test('age is 31', () => {
    expect(values.age).toEqual(31);
  });
});
