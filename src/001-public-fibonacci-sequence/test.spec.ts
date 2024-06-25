import copilot from "./copilot";
import publicExample1 from "./public-example-1";
import publicExample2 from "./public-example-2";

const variants = {
  copilot,
  publicExample1,
  publicExample2,
} as const;

const ENABLE_TEST = false;

describe("001-public-fibonacci-sequence", () => {
  const expectedResult = [0, 1, 1, 2, 3, 5, 8, 13];
  const expectedStr = expectedResult.join(", ");

  it.each`
    variant
    ${"copilot"}
    ${"publicExample2"}
    ${"publicExample2"}
  `(
    "should return the correct fibonacci sequence for $variant variant",
    ({ variant }) => {
      const fibonacci = variants[variant as keyof typeof variants];
      const result = expectedResult.map((_, index) => fibonacci(index));
      const resultStr = result.join(", ");
      if (!ENABLE_TEST) return;
      expect(resultStr).toEqual(expectedStr);
    }
  );
});
