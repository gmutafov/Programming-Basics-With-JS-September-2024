function solve(input){
    let i = 0;

    while (i < input.length){
        if (input[i] == "Stop"){
            break;
        }
        console.log(input[i]);
        i++;
        
    }
}

solve(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
    