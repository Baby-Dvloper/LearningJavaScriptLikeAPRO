// Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
// 2
const [gk, ...fieldPlayers] = players1;
// 3
const allPlayers = [...players1, ...players2];
// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// 5
const {
  odds: { team1, team2, x: draw },
} = game;

// 6
const printGoals = function (...players) {
  // V1
  // let str = '';
  // for (let i = 0; i < players.length; i++) {
  // 	if (i === players.length - 1 && players.length > 1) str += ` and ${players[i]}`;
  // 	else str += ` ${players[i]} ${players.length > 1 && i < players.length - 2 ? ', ' : ''}`;
  // }

  // str += ` | ${players.length} goals`;
  // console.log(str);

  // V2
  const playerGoals = {};

  for (const player of players) {
    if (!playerGoals[player]) playerGoals[player] = 1;
    else playerGoals[player]++;
  }

  for (let player in playerGoals) {
    console.log(`${player}: ${playerGoals[player]} ${playerGoals[player] > 1 ? 'goals' : 'goal'}`);
  }
  console.log(`${players.length} goals were scored`);
};

// 7
console.log(`${(team1 < team2 && 'Team1') || 'Team2'} is more likely to win`);
// let winner = game.team1 < game.team2 ? 'team1' : 'team2';

console.log(players1);
console.log(players2);
console.log(gk);
console.log(fieldPlayers);
console.log(allPlayers);
console.log(players1Final);
console.log(draw);
printGoals('Davies', 'Muller', 'Lewandowski', 'Davies');
printGoals(...game.scored);
// #############################################
// Challenge #2
// 1
for (const [index, name] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${name}`);
}

// 2
let sum = 0;
const odds = Object.values(game.odds);

for (const value of odds) {
  console.log(value);
  sum += value;
}

console.log(sum / odds.length);

// 3
for (const [key, value] of Object.entries(game.odds)) {
  console.log(typeof key, value);
  if (game[key]) {
    console.log(`Odd of victory ${game[key]}: ${value}`);
  } else console.log(`Odd of draw: ${value}`);
}

// 4
const scorers = {};
for (const namePlayer of game.scored) {
  console.log(namePlayer);
  (scorers[namePlayer] && scorers[namePlayer]++) || (scorers[namePlayer] = 1);
}

console.log(scorers);
// ##########################################
// Challenge #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
const events = [...new Set(gameEvents.values())];
// 2
gameEvents.delete(64);
// 3

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4
for (const [time, event] of gameEvents) {
  console.log((time < 45 && `[FIRST HALF]${time}: ${event}`) || `[SECOND HALF]${time}: ${event}`);
}
// #############################################
// Challenge #4

const convertToCamelCase = function (input) {
  const inputLowerCase = input.toLowerCase().split('\n');
  for (const [index, variable] of inputLowerCase.entries()) {
    const arrNames = variable.split('_');
    const arrCorrect = [];
    for (const name of arrNames) arrCorrect.push(name.trim().replace(name[0], name[0].toUpperCase()));
    console.log(`${arrCorrect.join('').padEnd(25, ' ')}${'✅'.repeat(index + 1)} \n`);
  }
};

const textArea = document.createElement('textarea');
document.body.append(textArea);
const convertButton = document.createElement('button');
document.body.append(convertButton);

convertButton.addEventListener('click', function () {
  convertToCamelCase(textArea.value);
});
