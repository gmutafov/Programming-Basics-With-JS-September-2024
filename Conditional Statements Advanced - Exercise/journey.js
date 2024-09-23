function solve(budget, season){
    let place = '';
    let type = '';
    let price = 0;
    if (budget <= 100){
        place = 'Bulgaria';
        if (season == 'summer'){
            price = 0.3 * budget;
            type = 'Camp';
        } else if (season == 'winter'){
            price = 0.7 * budget;
            type = 'Hotel';
        }
    } else if (budget > 100 && budget <= 1000){
        place = 'Balkans';
        if (season == 'summer'){
            price = 0.4 * budget;
            type = 'Camp';
        } else if (season == 'winter'){
            price = 0.8 * budget;
            type = 'Hotel'
        }
    } else if (budget > 1000){
        place = 'Europe'
        price = 0.9 * budget
        type = 'Hotel'
    }

    console.log(`Somewhere in ${place}`);
    console.log(`${type} - ${price.toFixed(2)}`);
    
}

solve(50,
    "summer"
    )
solve(75,
    "winter"
    )
solve(312,
    "summer"
    )
solve(678.53,
    "winter"
    )
solve(1500,
    "summer"
    )