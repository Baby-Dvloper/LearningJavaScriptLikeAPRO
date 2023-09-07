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
