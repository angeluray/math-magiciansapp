import calculate from '../Logic/calculate';

describe('Check calculate function behavior according to the operation', () => {
  test('Sum operation button', () => {
    expect(calculate({ total: '500', next: '200', operation: '-' }, '+')).toEqual({ total: '300', next: null, operation: '+' });
  });

  test('Substraction operation button', () => {
    expect(calculate({ total: '50', next: '25', operation: '-' }, 'x')).toEqual({ total: '25', next: null, operation: 'x' });
  });

  test('Devide operation button', () => {
    expect(calculate({ total: '700', next: '2', operation: '÷' }, '=')).toEqual({ total: '350', next: null, operation: null });
  });

  test('+/- operation button', () => {
    expect(calculate({ total: 85, next: null, operation: null }, '+/-')).toEqual({ total: '-85', next: null, operation: null });
  });

  test('% operation button', () => {
    expect(calculate({ total: null, next: '800', operation: null }, '%')).toEqual({ total: '800', next: null, operation: '%' });
  });

  test('Equal result after a Multiply operation', () => {
    expect(calculate({ total: '30', next: '97', operation: 'x' }, '=')).toEqual({ total: '2910', next: null, operation: null });
  });

  test('AC reset operation button', () => {
    expect(calculate({ total: '216', next: '80', operation: null }, 'AC')).toEqual({ total: null, next: null, operation: null });
  });

  test('Add dot to an operation', () => {
    let addDot = calculate({ total: null, next: null, operation: null }, '83');
    addDot = calculate(addDot, '.');
    addDot = calculate(addDot, '33');
    expect(addDot).toEqual({ total: null, next: '83.33' });
  });
});
