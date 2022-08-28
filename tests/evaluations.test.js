const { evaluate } = require("../libs/game");

describe("evaluations", () => {
  it("should return all correct evaluation when guess word is พะแนง and soulution is พะแนง", () => {
    const solution = "พะแนง";
    const guessWord = "พะแนง";

    const result = evaluate(solution, guessWord);
    expect(result).toEqual([
      "correct",
      "correct",
      "correct",
      "correct",
      "correct",
    ]);
  });

  it("should return some correct and some include evaluation when guess word is ะพแนง and soulution is พะแนง", () => {
    const solution = "พะแนง";
    const guessWord = "ะพแนง";

    const result = evaluate(solution, guessWord);
    expect(result).toEqual([
      "include",
      "include",
      "correct",
      "correct",
      "correct",
    ]);
  });

  it("should return some correct and some include and some exclude evaluation when guess word is ะพแนก and soulution is พะแนง", () => {
    const solution = "พะแนง";
    const guessWord = "ะพแนก";

    const result = evaluate(solution, guessWord);
    expect(result).toEqual([
      "include",
      "include",
      "correct",
      "correct",
      "exclude",
    ]);
  });

  it("should return when guess word is นน and solution is ทน", () => {
    const solution = "ทน";
    const guessWord = "นน";

    const result = evaluate(solution, guessWord);
    expect(result).toEqual([
      "exclude",
      "correct",
    ]);
  });

  it("should returnwhen guess word is นมนาน and solution is ทนทาน", () => {
    const solution = "ทนทาน";
    const guessWord = "นมนาน";

    const result = evaluate(solution, guessWord);
    expect(result).toEqual([
      "include",
      "exclude",
      "exclude",
      "correct",
      "correct",
    ])
  })
});
