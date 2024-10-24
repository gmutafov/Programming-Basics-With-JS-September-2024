function solve(start, end, magicNumber) {
    let combinationCount = 0;
    let isFound = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combinationCount++;
            if (i + j === magicNumber) {
                console.log(`Combination N:${combinationCount} (${i} + ${j} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${combinationCount} combinations - neither equals ${magicNumber}`);
    }
}

solve(1, 10, 5)