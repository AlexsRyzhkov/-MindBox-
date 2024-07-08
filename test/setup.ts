import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest';

/// Библитека PrimeReact имеет баг во время тестирования
const originalConsoleError = console.error;
const jsDomCssError = "Error: Could not parse CSS stylesheet";
console.error = (...params) => {
    if (!params.find((p) => p.toString().includes(jsDomCssError))) {
        originalConsoleError(...params);
    }
};

afterEach(() => {
    cleanup();
})