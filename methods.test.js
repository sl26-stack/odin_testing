import { capitalize, reverseString, calculator } from "./methods"

// Capitalize first letter
test('capitalize first letter of test', () => {
    expect(capitalize('test')).toBe('Test');
});

// Reversal of string test
test('reversed test is tset', () => {
    expect(reverseString('test')).toBe('tset');
});

// Add 2 numbers
test('1 + 2 = 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

// Subtract 1st number from 2nd
test('5 - 4 = 1', () => {
    expect(calculator.subtract(5, 4)).toBe(1);
});

// Divide a by b
test('9 / 3 = 3', () => {
    expect(calculator.divide(9, 3)).toBe(3);
});

// Multiply a by b
test('5 * 6 = 30', () => {
    expect(calculator.multiply(5, 6)).toBe(30);
});