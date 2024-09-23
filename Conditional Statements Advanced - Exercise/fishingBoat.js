function solve(budget, season, fishermen){
    let price = 0;
    switch (season) {
        case "Spring":
            price = 3000;
            break;
        case "Summer":
            price = 4200;
            break;
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }
    if (fishermen <= 6){
        price *= 0.90;
    } else if (fishermen >= 7 && fishermen <= 11){
        price *= 0.85;
    } else if (fishermen >= 12){
        price *= 0.75;
    }
    if (fishermen % 2 == 0 && season !== 'Autumn'){
        price *= 0.95
    }
    
    if (budget >= price){
        console.log(`Yes! You have ${(budget-price).toFixed(2)} leva left.`);
        
    } else {
        console.log(`Not enough money! You need ${(price-budget).toFixed(2)} leva.`);
        
    }
}

solve(3000,
    "Summer",
    11
    )
solve(3600,
    "Autumn",
    6
    )
