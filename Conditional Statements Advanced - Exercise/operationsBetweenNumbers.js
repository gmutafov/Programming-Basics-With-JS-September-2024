function solve(a, b, operator){
    let result = 0;
    switch (operator) {
        case "+":
            result = a + b;
            if(result % 2 === 0){
                oddEven = "even";
            }
            else{
                oddEven = "odd";
            }
            console.log(`${a} ${operator} ${b} = ${result} - ${oddEven}`);
            break;
        case "-":
            result = a - b;
            if(result % 2 === 0){
                oddEven = "even";
            }
            else{
                oddEven = "odd";
            }
            console.log(`${a} ${operator} ${b} = ${result} - ${oddEven}`);
        break;
        case "*":
            result = a * b;
            if(result % 2 === 0){
                oddEven = "even";
            }
            else{
                oddEven = "odd";
            }
            console.log(`${a} ${operator} ${b} = ${result} - ${oddEven}`);
        break;
        case "/":
            result = (a / b).toFixed(2);
            if(b === 0){
                console.log(`Cannot divide ${a} by zero`);
            return;
            }
            console.log(`${a} ${operator} ${b} = ${result}`);
        break;
        case "%":
            if(b === 0){
                console.log(`Cannot divide ${a} by zero`);
            return;
            }
            result = a % b;
            console.log(`${a} ${operator} ${b} = ${result}`);
        break;
    }
}


solve(10, 12, "+")