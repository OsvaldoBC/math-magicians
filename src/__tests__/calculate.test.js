import calculate from '../logic/calculate';

describe('test all calculator function', () => {
  test('will return the value of 4 by adding 2 + 2', () => {
    const myObj = {
      total: '2', next: '2', operation: '+',
    };
    const ResObj = {
      total: '4', next: null, operation: null,
    };
    expect(calculate(myObj, '=')).toEqual(ResObj);
  });
  test('will return the value of 5 by substract 8 - 3', () => {
    const myObj = {
      total: '8', next: '3', operation: '-',
    };
    const ResObj = {
      total: '5', next: null, operation: null,
    };
    expect(calculate(myObj, '=')).toEqual(ResObj);
  });
  test('will return the value of null by pressing AC', () => {
    const myObj = {
      total: '2', next: '2', operation: '÷',
    };
    const ResObj = {
      total: 0, next: null, operation: null,
    };
    expect(calculate(myObj, 'AC')).toEqual(ResObj);
  });
  test('will return the value of 4 by multiply 3 x 2', () => {
    const myObj = {
      total: '3', next: '2', operation: 'x',
    };
    const ResObj = {
      total: '6', next: null, operation: null,
    };
    expect(calculate(myObj, '=')).toEqual(ResObj);
  });
});
