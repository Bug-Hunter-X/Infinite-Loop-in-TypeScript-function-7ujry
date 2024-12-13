function printNumbers(n: number): void {
  if (n < 0) {
    console.error("Input must be a non-negative number.");
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // Prints numbers from 1 to 10
printNumbers(-5); // Prints an error message