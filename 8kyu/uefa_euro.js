const uefaEuro2016 = (team, scores) => {
  let result;
  if (scores[0] < scores[1]) {
    result = `At match ${team[0]} - ${team[1]}, ${team[1]} won!`;
  } else if (scores[0] > scores[1]) {
    result = `At match ${team[0]} - ${team[1]}, ${team[0]} won!`;
  } else {
    result = `At match ${team[0]} - ${team[1]}, teams played draw.`;
  }
  return result;
};
