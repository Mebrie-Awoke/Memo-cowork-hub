// Advanced mathematical operations leveraging the basic module
import { add } from './basic.js';

export function multiply(a, b) {
    return a * b;
}

export function sumArray(numbers) {
    return numbers.reduce((total, num) => add(total, num), 0);
}

// Quick executable test to verify it works
const nums = [1, 2, 3, 4, 5];
console.log(`Math Test: The sum of [${nums}] is ${sumArray(nums)}`);
console.log(`Math Test: 6 multiplied by 7 is ${multiply(6, 7)}`);