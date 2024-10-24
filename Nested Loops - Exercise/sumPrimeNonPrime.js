function solve(arr){
    let sumPrime = 0;
    let sumNonPrime = 0;

    let index = 0;
    let command = arr[index];
    index++;

    while (command !== 'stop'){
        let num = Number(command);

        if (num < 0){
            console.log('Number is negative.');
            
            command = arr[index];
            index++;
            continue;
        }


        let isPrime = true;

        for (let divisor = 2; divisor < num; divisor++){
            if (num % divisor === 0){
                isPrime = false;
                break;
            }
        }

        if (isPrime){
            sumPrime += num;
        } else {
            sumNonPrime += num;
        }

        command = arr[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
    
}


solve(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])
    