function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // This will work fine
printNumbers(-5); // This will result in an infinite loop because the loop condition i <= n will always be true when n is negative.