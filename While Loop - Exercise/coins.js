function solve(change){
    let changeInSt = Math.round(change * 100);
    let coinsUsed = 0;

    while (changeInSt !== 0){
        
        if (changeInSt >= 200){
            changeInSt -= 200;
        } else if (changeInSt >= 100) {
            changeInSt -= 100;
        } else if (changeInSt >= 50){
            changeInSt -= 50;

        } else if (changeInSt >= 20){
            changeInSt -= 20;

        } else if (changeInSt >= 10){
            changeInSt -= 10;
    
        } else if (changeInSt >= 5){
            changeInSt -= 5;
    
        } else if (changeInSt >= 2){
            changeInSt -= 2;
    
        } else if (changeInSt >= 1){
            changeInSt -= 1;
        
        }
        coinsUsed++;
    }
    console.log(coinsUsed);
    
}

solve(1.23)