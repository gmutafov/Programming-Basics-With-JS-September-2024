function solve(arr){
    let firstNum = Number(arr[0]);
    let sum = 0;
    let index = 1;
    while (sum < firstNum){
        
        let currNum = Number(arr[index]);
        sum += currNum;
        index++;
    }
    console.log(sum);
    
}

solve(["100",
    "10",
    "20",
    "30",
    "40"])
    