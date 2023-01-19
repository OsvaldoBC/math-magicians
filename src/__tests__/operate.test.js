import operate from '../logic/operate';

describe('operate', () => {
  test('shoud return 10 after adding 7 + 3', () => {
    expect(operate('7', '3', '+')).toEqual('10');
  });
  test('shoud return 5 after adding 8 - 3', () => {
    expect(operate('8', '3', '-')).toEqual('5');
  });
  test('shoud return 30 after adding 6 x 5', () => {
    expect(operate('6', '5', 'x')).toEqual('30');
  });
  test('shoud return 4 after adding 12 ÷ 3', () => {
    expect(operate('12', '3', '÷')).toEqual('4');
  });
});
