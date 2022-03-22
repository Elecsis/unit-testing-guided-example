const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test('zero times anything should be zero',() =>{
        const result = multiply(2,0);
        expect(result).toBe(0)
    });
    test('should return multipulction of two positive intergers',() =>{
        const result = multiply(4,5);
        expect(result).toBe(20)
    }); 
    test('should return a negative integer when negative and positive numbers are multiplied', () => {
        const result = multiply(5, -9);
        expect(result).toBeLessThan(0);
    })
});