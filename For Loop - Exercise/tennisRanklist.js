function solve(input){
    
    let tournaments = Number(input[0]);
    let initialPoints = Number(input[1])
    let pointsWon = 0;
    let wins = 0;

    for (let i = 2; i < tournaments + 2; i++){
        let tournamentRes = input[i];

        if (tournamentRes == 'W'){
            pointsWon += 2000;
            wins += 1;
        } else if (tournamentRes == 'F'){
            pointsWon += 1200;
        } else if (tournamentRes == 'SF'){
            pointsWon += 720
        }
    }

    let avgPoints = pointsWon / tournaments;

    console.log(`Final points: ${initialPoints + pointsWon}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${((wins / tournaments) * 100).toFixed(2)}%`);

    
}

solve(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
    