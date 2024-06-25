//! https://rahulbansalc6414.medium.com/fibonacci-program-part-2-with-typescript-2334818c1b69

function getFibRecursive(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  return getFibRecursive(n - 1) + getFibRecursive(n - 2);
}

export default getFibRecursive;
