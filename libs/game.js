import { isNullOrUndefined } from "./utils/common";

export function evaluate(solution, guess) {
  if (isNullOrUndefined(solution)) return [];
  if (isNullOrUndefined(guess)) return [];
  if (solution.length != guess.length) return [];
  const distanceSolutions = distance(solution, guess);
  const evaluation = distanceSolutions.map(mapEvaluate(solution));
  return order_evaluate(evaluation).map((e) => e.evaluate_value);
}

const mapEvaluate = (solution) => (value, index) => {
  const match_character = value.match_character;

  if (!match_character) value.evaluate_value = "exclude";
  if (value.distance === 0) value.evaluate_value = "correct";
  else value.evaluate_value = "include";
  const indexOfSolution = solution.indexOf(value.guess_value);
  if (indexOfSolution == -1) value.evaluate_value = "exclude";
  solution[value.solution_index] = "";
  return value;
};

const distance = (solution, guess) => {
  const closest_solutions = guess.map((guessLetter, guessIndex) => {
    const solutionCandidate = [];

    const guess_value = guessLetter;
    const guess_index = guessIndex;
    let solution_value = null;
    let solution_index = null;
    let distance = Number.POSITIVE_INFINITY;
    let match_character = false;

    solution.forEach((solutionLetter, solutionIndex) => {
      solution_value = solutionLetter;
      solution_index = solutionIndex;
      distance = euclidean_distance(guess_index, solution_index);
      match_character = guess_value === solution_value;
      const property = {
        guess_value,
        guess_index,
        solution_value,
        solution_index,
        distance,
        match_character,
      };
      solutionCandidate.push(property);
    });

    const drop_out = filter_distance(solutionCandidate);
    const closest = closest_distance(drop_out);
    if (isNullOrUndefined(closest))
      return {
        guess_value,
        guess_index,
        solution_value: null,
        solution_index: null,
        distance: Number.POSITIVE_INFINITY,
        match_character: false,
      };
    return closest;
  });

  const order_distances = order_distance(closest_solutions);
  return order_distances;
};

const euclidean_distance = (p, q) => Math.abs(p - q);

const filter_distance = (candidates) =>
  candidates.filter((candidate) => candidate.match_character);

const order_distance = (distances) =>
  distances.sort((a, b) => a.distance - b.distance);

const order_evaluate = (evaluates) =>
  evaluates.sort((a, b) => a.guess_index - b.guess_index);

const closest_distance = (candidates) => {
  let closest = null;
  for (let i = 0; i < candidates.length; i++) {
    if (!closest) closest = candidates[i];
    if (candidates[i].distance < closest.distance) closest = candidates[i];
  }

  return closest;
};
