function solve(flower, qty, budget){
    let price = 0;
    switch (flower) {
        case "Roses":
            price = 5;
            break;
        case "Dahlias":
            price = 3.80;
            break;
        case "Tulips":
            price = 2.80;
            break;
        case "Narcissus":
            price = 3;
            break;
        case "Gladiolus":
            price = 2.50;
            break;
    }
    let totalPrice = qty * price;
    if (flower == 'Roses' && qty > 80){
        totalPrice *= 0.90;
    } else if (flower == 'Dahlias' && qty > 90){
        totalPrice *= 0.85;
    } else if (flower == 'Tulips' && qty > 80){
        totalPrice *= 0.85;
    } else if (flower == 'Narcissus' && qty < 120){
        totalPrice *= 1.15;
    }else if (flower == 'Gladiolus' && qty < 80){
        totalPrice *= 1.20;
    }
    
    if (budget >= totalPrice){
        console.log(`Hey, you have a great garden with ${qty} ${flower} and ${(budget - totalPrice).toFixed(2)} leva left.`);
        
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
        
    }
}