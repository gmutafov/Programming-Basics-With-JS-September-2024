function solve(subscription){
    let shoes = subscription - (subscription * 0.4);
    let clothes = shoes - (shoes * 0.2);
    let ball = clothes / 4;
    let accessories = ball / 5
    let total = subscription + shoes + clothes + ball + accessories;
    console.log(total);
    
}

solve(365)