// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscp-22-javascript-syntax-part-ii-c8ddbace-1463-4797-ae12-503c7b0f9552/modules/wdcp-22-learn-javascript-syntax-objects-42047fd1-bfb5-4b90-96a5-431acbee8013/projects/team-stats

const team = {
    _players: [
        {
            firstName: 'Connor',
            lastName: 'Fox',
            age: 18
        }, {
            firstName: 'Joanna',
            lastName: 'Fox',
            age: 18
        }, {
            firstName: 'Lynn',
            lastName: 'Fox',
            age: 18
        }
    ],
    _games: [
        {
            opponent: 'Johns Town',
            teamPoints: 0,
            opponentPoints: 0
        }, {
            opponent: 'Peters Town',
            teamPoints: 0,
            opponentPoints: 0
        }, {
            opponent: 'Celtics',
            teamPoints: 0,
            opponentPoints: 0
        },
    ],
    // Getters
    get players() {
        return this._players
    },
    get games() {
        return this._games
    },

    // methods
    addPlayer(newFirstName, newLastName, newAge) {
        const player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        }
        return this._players = player
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        return this._games = game
    }

}
team.addPlayer('wayne', 'fox', '45')
team.addGame('Titans', 100, 98)

console.log(team.players, 'players')

console.log(team.games, 'games')
