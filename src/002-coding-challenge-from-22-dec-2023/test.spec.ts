import copilot from "./copilot";
import mySolution from "./my-solution";
import copilotRecursive from "./copilot-recursive";

const variants = {
  mySolution,
  copilot,
  copilotRecursive,
} as const;

describe("002-coding-challenge-from-22-dec-2023", () => {
  it.each`
    variant
    ${"mySolution"}
    ${"copilot"}
    ${"copilotRecursive"}
  `("should return correct result for $variant variant", ({ variant }) => {
    const maxChar = variants[variant as keyof typeof variants];

    expect(maxChar("abcccccccd")).toEqual("c");
    expect(maxChar("apple 1231111")).toEqual("1");
  });
});
