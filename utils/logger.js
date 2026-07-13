// Application log wrapper
import { getFormattedDate } from './date.js';

export function logInfo(message) {
    console.log(`[INFO] [${getFormattedDate()}]: ${message}`);
}

export function logError(error) {
    console.error(`[ERROR] [${getFormattedDate()}]: ${error}`);
}

// Quick execution test
logInfo("Toolkit initialized successfully!");