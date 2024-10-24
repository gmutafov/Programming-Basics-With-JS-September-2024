function solve(input) {
    
    let numbers = input.toString().split('')
    .reverse()
    .map(Number);

    if (numbers.includes(0)) {
        console.log("Цифрите не могат да бъдат нула!");
        return;
    }

    let firstNum = numbers[0];
    let secondNum = numbers[1];
    let thirdNum = numbers[2];

    for (let i = 1; i <= firstNum; i++) {
        for (let j = 1; j <= secondNum; j++) {
            for (let k = 1; k <= thirdNum; k++) {
                let result = i * j * k;
                console.log(`${i} * ${j} * ${k} = ${result};`);
            }
        }
    }
}

solve(["324"])