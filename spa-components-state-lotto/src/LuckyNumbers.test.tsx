import React from 'react';
import { render, screen } from '@testing-library/react';
import LuckyNumbers, {generateLuckyNumbers} from './LuckyNumbers';

test("First 6 Numbers are unique", () => {
    for(let i = 0; i < 10000; i++){
        const luckyNumbers = generateLuckyNumbers();
        for(let j = 0; j < 6; j++){
            expect([...luckyNumbers.slice(0,j),...luckyNumbers.slice(j+1,6)]).not.toContain(luckyNumbers[j])
        }
        
    }
})

test("First 6 Numbers are between 1 and 49", () => {
    for(let i = 0; i < 10000; i++){
        const luckyNumbers = generateLuckyNumbers();
        for(let j = 0; j < 6; j++){
            expect(luckyNumbers[j]).toBeGreaterThanOrEqual(1)
            expect(luckyNumbers[j]).toBeLessThanOrEqual(49)
        }
        
    }
})

test("Last Number is between 1 and 10", () => {
    for(let i = 0; i < 10000; i++){
        const luckyNumbers = generateLuckyNumbers();
            expect(luckyNumbers[luckyNumbers.length - 1]).toBeGreaterThanOrEqual(1)
            expect(luckyNumbers[luckyNumbers.length - 1]).toBeLessThanOrEqual(10)       
    }
})


