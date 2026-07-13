// Simple validation routines
import { slugify } from './format.js';

export function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Quick executable test
const testEmail = "developer@example.com";
const title = "Hello World! This is Git.";

console.log(`String Test: Is '${testEmail}' valid? ${isValidEmail(testEmail)}`);
console.log(`String Test: Slugified title: '${slugify(title)}'`);