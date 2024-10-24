function solve(age, washerPrice, pricePerToy){
    let savings = 0;
    let giftedMoney = 10;

    for (let i = 1; i <= age; i++){
        if (i % 2 === 0){
            savings += giftedMoney - 1;
            giftedMoney += 10;
        } else {
            savings += pricePerToy;
        }
    }
    if (savings >= washerPrice){
        console.log(`Yes! ${(savings - washerPrice).toFixed(2)}`);
        
    } else {
        console.log(`No! ${(washerPrice - savings).toFixed(2)}`);
        
    }
}

solve(10,
    170.00,
    6
    )