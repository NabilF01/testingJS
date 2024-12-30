const divide = require('./testing');

test('divides 6 by 3 to get 2', () => {
    expect(divide(6, 3)).toBe(2);
});

test('throws an error when dividing by zero', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
});
