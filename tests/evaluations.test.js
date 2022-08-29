import { evaluate } from "../libs/game";

describe("evaluations", () => {
  it("should return emptyp array when input empty array, null or undefined to solution", () => {
    const result = evaluate(null);
    expect(result).toEqual([]);
  });

  it("should return emptyp array when input empty array, null or undefined to solution", () => {
    const result = evaluate(["a"], null);
    expect(result).toEqual([]);
  });

  it("should return emptyp array when input empty array, null or undefined to solution", () => {
    const result = evaluate(["a"], ["a", "b"]);
    expect(result).toEqual([]);
  });

  it("should return evaluation when guess word is พะแนง and soulution is พะแนง", () => {
    const solution = ["พ", "ะ", "แ", "น", "ง"];
    const guessWord = ["พ", "ะ", "แ", "น", "ง"];

    const result = evaluate(solution, guessWord);
    expect(result).toEqual([
      "correct",
      "correct",
      "correct",
      "correct",
      "correct",
    ]);
  });

  it("should return evaluation when guess word is ะพแนง and soulution is พะแนง", () => {
    const solution = ["พ", "ะ", "แ", "น", "ง"];
    const guessWord = ["ะ", "พ", "แ", "น", "ง"];

    const result = evaluate(solution, guessWord);
    expect(result).toEqual([
      "include",
      "include",
      "correct",
      "correct",
      "correct",
    ]);
  });

  it("should return evaluation evaluation when guess word is ะพแนก and soulution is พะแนง", () => {
    const solution = ["พ", "ะ", "แ", "น", "ง"];
    const guessWord = ["ะ", "พ", "แ", "น", "ก"];

    const result = evaluate(solution, guessWord);
    expect(result).toEqual([
      "include",
      "include",
      "correct",
      "correct",
      "exclude",
    ]);
  });

  it("should return evaluation when guess word is นน and solution is ทน", () => {
    const solution = ["ท", "น"];
    const guessWord = ["น", "น"];

    const result = evaluate(solution, guessWord);
    expect(result).toEqual(["exclude", "correct"]);
  });

  it("should return evaluation when guess word is นมนาน and solution is ทนทาน", () => {
    const solution = ["ท", "น", "ท", "า", "น"];
    const guessWord = ["น", "ม", "น", "า", "น"];

    const result = evaluate(solution, guessWord);
    expect(result).toEqual([
      "include",
      "exclude",
      "exclude",
      "correct",
      "correct",
    ]);
  });

  it("should return evaluation when guess word is ถลน and solution is ขนม", () => {
    const solution = ["ข", "น", "ม"];
    const guessWord = ["ถ", "ล", "น"];

    const result = evaluate(solution, guessWord);
    expect(result).toEqual(["exclude", "exclude", "include"]);
  });

  it("should return evaluation when guess word is ถนน and solution is ถลน", () => {
    const solution = ["ถ", "ล", "น"];
    const guessWord = ["ถ", "น", "น"];

    const result = evaluate(solution, guessWord);
    expect(result).toEqual(["correct", "exclude", "correct"]);
  });

  it("should return evaluation when guess bread and solution is chief", () => {
    const solution = ["c", "h", "i", "e", "f"];
    const guessWord = ["b", "r", "e", "a", "d"];

    const result = evaluate(solution, guessWord);
    expect(result).toEqual(["exclude", "exclude", "include", "exclude", "exclude"]);
  })
});
