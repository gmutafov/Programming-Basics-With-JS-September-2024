function solve(arr){
    let i = 0;
    let command = arr[i]
    let maxNumber = Number.MAX_SAFE_INTEGER;

    while (command !== 'Stop'){
        let number = Number(command);
        if (number < maxNumber){
            maxNumber = number;
        }

        command = arr[i];
        i++;
    }
    console.log(maxNumber);
    
}


solve(["100",
    "99",
    "80",
    "70",
    "Stop"])

solve(["-10",
    "20",
    "-30",
    "Stop"])

solve(["45",
    "-20",
    "7",
    "99",
    "Stop"])

solve(["999",
    "Stop"])

solve(["-1",
"-2",
"Stop"])
