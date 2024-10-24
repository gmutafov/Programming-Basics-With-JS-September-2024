function solve(arr){
    let account = 0;
    let i = 0;
    
    let command = arr[i];
    i++;
    
    while (command !== 'NoMoreMoney'){
        let money = Number(command);

        if (money < 0){
            console.log('Invalid operation!');
            break;
        }
        console.log(`Increase: ${money.toFixed(2)}`);
        account += money;
        
        command = arr[i];
        i++;
        
    }
    console.log(`Total: ${account.toFixed(2)}`);
    
}

solve(["5.51", 
    "69.42",
    "100",
    "NoMoreMoney"])
    