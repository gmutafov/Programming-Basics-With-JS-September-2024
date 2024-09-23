function solve(pens, markers, detergent, discount){
    let totalPens = pens * 5.80;
    let totalMarkers = markers * 7.20;
    let totalDetergent = detergent * 1.20;
    let totalWithoutDiscount = totalPens + totalMarkers + totalDetergent;
    let totalPrice = totalWithoutDiscount - (totalWithoutDiscount * discount / 100);
    console.log(totalPrice);
    
}

solve(2, 3, 4, 25)