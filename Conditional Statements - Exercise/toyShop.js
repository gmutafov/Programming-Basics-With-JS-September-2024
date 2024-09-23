function solve(tripPrice, puzzleCount, dollCount, bearCount, minionCount, truckCount){
    let moneyEarned = (puzzleCount * 2.6) + (dollCount * 3) + (bearCount * 4.1) + (minionCount * 8.2) + (truckCount * 2);
    let toyCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
    if (toyCount >= 50){
        moneyEarned *= 0.75;
    }
    moneyEarned *= 0.9;

    if (moneyEarned >= tripPrice){
        let moneyLeft = moneyEarned - tripPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(tripPrice - moneyEarned).toFixed(2)} lv needed.`)
    }
}

solve(40.8,
20,
25,
30,
50,
10
)
