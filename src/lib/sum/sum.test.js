import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 4 + -22 to be negative', () => {
    expect(sum(4, -22)).toBeLessThan(0);
});