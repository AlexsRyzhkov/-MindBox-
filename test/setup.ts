import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest';

// Библиотека PrimeReact имеет баг
// во время тестирования выдает ошибку компиляции css
// эта ошибка не влияет на тестирование но мешает чтению логов
// поэтому я отключил ее командой ниже
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