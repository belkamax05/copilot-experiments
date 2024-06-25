//? Source: https://javascript.plainenglish.io/the-fibonacci-sequence-in-typescript-4401bd3b9d1f
//? https://gist.github.com/mscolnick/2d9fe95f1ca63b88f3cb318e98beb821

function fibonacci(num: number): number {
  if (num <= 1) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

export default fibonacci;
