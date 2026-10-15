import { capitalize } from "./methods"

test('capitalize first letter of test', () => {
    expect(capitalize('test')).toBe('Test');
});