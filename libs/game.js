module.exports.evaluate = (solution, guessWord) => {
  if (solution.length != guessWord.length) return [];
  const characterSize = (solution.length + guessWord.length) / 2;
  
  const results = Array(characterSize).fill("exclude");
  return results.map(mapEvaluateValue(solution, guessWord));
};

const matchLetter = (a, b) => a === b ? "correct" : null;
const includeLetter = (solution, letter) =>
  solution.split("").includes(letter) ? "include" : "exclude";

const mapEvaluateValue = (solution, guessWord) => {
  return (value, index) =>
    matchLetter(solution.charAt(index), guessWord.charAt(index)) ||
    includeLetter(solution, guessWord.charAt(index));
};
