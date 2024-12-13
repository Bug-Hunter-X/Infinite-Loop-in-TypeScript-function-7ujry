# Infinite Loop Bug in TypeScript

This repository demonstrates a common bug in TypeScript that can lead to infinite loops. The function `printNumbers` is intended to print numbers from 1 to `n`. However, if a negative number is passed as input, the loop condition `i <= n` will always be true, resulting in an infinite loop.

The solution involves adding a check to ensure that `n` is non-negative before entering the loop. The corrected code is provided in `bugSolution.ts`.