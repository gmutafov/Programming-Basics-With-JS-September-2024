function solve(budget, actorsCount, singleCostumePrice){
    let decorPrice = 0.1 * budget;
    let totalCostumePrice = actorsCount * singleCostumePrice;

    if (actorsCount > 150) {
        totalCostumePrice *= 0.9;
    }

    let totalPrice = decorPrice + totalCostumePrice;

    if (budget >= totalPrice){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);

    } else {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`)
    }
}

solve(20000, 120, 55.5)