function solve(a, b){
    let sum = 0;
    let buff = "";    
    for (let i = a; i <= b; i++){
        if (i % 9 === 0){
            sum += i;
            buff += i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(buff);
    

}

solve(100, 200)