function adder(num1, num2) {
    return num1 + num2;
}

test('first test', () => {
   expect(adder(3,4)).toBe(7);
})
