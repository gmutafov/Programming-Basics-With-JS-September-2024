function solve(naylonNeeded, paintNeeded, thinnerNeeded, hoursWork){
    let totalNaylon = (naylonNeeded + 2) * 1.50;
    let totalPaint = (paintNeeded + paintNeeded * 0.1) * 14.50;
    let totalThinner = thinnerNeeded * 5;
    let suppliesTotal = totalNaylon + totalPaint + totalThinner + 0.40;
    let workPrice = (suppliesTotal * 0.30) * hoursWork;
    let totalPrice = suppliesTotal + workPrice;
    console.log(totalPrice);

}

solve(10, 11, 4, 8)