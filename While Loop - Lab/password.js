function solve(arr){
    let user = arr[0];
    let password = arr[1];
    let attempt = arr[2];
    let i = 3;

    while (attempt !== password){
        attempt = arr[i];
        i++;
    }
    console.log(`Welcome ${user}!`);
    
}

solve(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
    