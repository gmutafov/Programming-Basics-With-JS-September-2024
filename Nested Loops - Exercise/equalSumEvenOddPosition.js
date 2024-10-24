function solve(a, b){
    result = '';
    for (let currentNum = a; currentNum <= b; currentNum++){
        let evenSum = 0;
        let oddSum = 0;

        let currNumAsStr = currentNum + '';

        for (let i = 0; i < currNumAsStr.length; i++){
            let digit = Number(currNumAsStr[i])

            if (i % 2 === 0){
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }
        if (evenSum === oddSum){
            result += currentNum + ' ';
        }
    }
    console.log(result);
    
}

solve(100000,
    100050
    )