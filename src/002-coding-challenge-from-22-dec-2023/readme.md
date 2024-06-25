# Task

Attempt to solve coding challenge done previously with copilot

> Task was:

```typescript
// --- Directions
// Given a string, return the character that is most commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
```

# Observation

## My solution

- ℹ️ Uses recursion with argument using different types, when called with "string", internally uses array for counting buffer and going deep into recursion
- ✅ Pass unit tests

```typescript
function maxChar(str) {
  if (typeof str === "string") return maxChar([str, 0, str[0]]);
  const [value, buffLen, buffChar] = str;
  const [currChar] = value;
  const remainStr = value.replaceAll(currChar, "");
  if (!remainStr) return buffChar;
  const currLen = value.length - remainStr.length;
  return maxChar([
    remainStr,
    ...(currLen > buffLen ? [currLen, currChar] : [buffLen, buffChar]),
  ]);
}
```

## Copilot result

> prompt:

```text
--- Directions
Given a string, return the character that is most commonly used in the string.
--- Examples
maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1"
```

- ℹ️ uses for loops
- ✅ Pass unit tests

> code:

```typescript
function maxChar(str: string): string {
  const charMap: Record<string, number> = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}
```

## Copilot result adjustments

### Asking copilot to improve result, attempting to get it work with recursion too.

> prompt: Need same, but using recursion instead

> response:

```text
Implementing a function to find the most common character in a string using recursion is less straightforward due to the nature of the problem, which inherently involves counting and comparing frequencies of various characters. Recursion isn't the most natural fit for this task, but for educational purposes, here's a creative approach:

Base Case: If the string is empty or has only one character, return that character or an empty string.
Recursive Step: Compare the first character with the rest of the string to count its occurrences. Then, recursively find the most common character in the rest of the string excluding the current character. Finally, compare the counts and return the character with the higher count.
This approach involves significantly more computation and is less efficient than iterative solutions.
```

```typescript
function maxCharRecursive(
  str: string,
  currentMaxChar: string = "",
  currentMaxCount: number = 0
): string {
  if (str.length === 0) return currentMaxChar;

  const char = str[0];
  const count = countChar(str, char);

  if (count > currentMaxCount) {
    return maxCharRecursive(
      str.replace(new RegExp(char, "g"), ""),
      char,
      count
    );
  } else {
    return maxCharRecursive(
      str.replace(new RegExp(char, "g"), ""),
      currentMaxChar,
      currentMaxCount
    );
  }
}

function countChar(str: string, char: string): number {
  if (str.length === 0) return 0;
  return (str[0] === char ? 1 : 0) + countChar(str.slice(1), char);
}
```

```text
This recursive solution splits the problem into counting occurrences of the current character and then recursively processing the rest of the string. It's a demonstration of how recursion can be applied but is not recommended for practical use due to its inefficiency and complexity compared to a simple loop or map-based approach.
```

- 🟡 Copilot decide to rename function into "maxCharRecursive" without asking
- ℹ️ 'countChar' helper function created
- ✅ Pass unit tests
- ✅ Overall good look of the code

# Conclusion

Although in my own solution attempt was to create code of specific look, and use less of "for" loops, copilot did it, but it's code was slightly easier to read, but when asked to do recursive solution, it did amazing work, demonstrating quality of code better then previous two
