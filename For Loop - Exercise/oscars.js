function oscars(data) {
    let actorName = data[0];
    let academyPoints = parseFloat(data[1]);
    let numberOfEvaluators = parseInt(data[2]);  
    let currentPoints = academyPoints;

    for (let i = 3; i < 3 + numberOfEvaluators * 2; i += 2) {
        let evaluatorName = data[i];
        let evaluatorPoints = parseFloat(data[i + 1]);
        
        let pointsFromEvaluator = (evaluatorName.length * evaluatorPoints) / 2;
        currentPoints += pointsFromEvaluator;

        if (currentPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${currentPoints.toFixed(1)}!`);
            return;
        }
    }

    let pointsNeeded = 1250.5 - currentPoints;
    console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
}


oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])
    