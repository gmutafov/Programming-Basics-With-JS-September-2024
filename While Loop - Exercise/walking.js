function solve(arr){
    let totalSteps = 0;
    
    let index = 0;
    let command = arr[index];
    index++;

    while (command !== 'Going home'){
        let steps = Number(command);
        totalSteps += steps;

        if (totalSteps >= 10000){
            console.log('Goal reached! Good job!');
            console.log(`${totalSteps - 10000} steps over the goal!`);
            return;
        }

        command = arr[index]
        index++;
    }

    let stepsGoingHome = Number(arr[index])
    totalSteps += stepsGoingHome;

    if (totalSteps >= 10000){
        console.log('Goal reached! Good job!');
        console.log(`${totalSteps - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - totalSteps} more steps to reach goal.`);
        
    }


}

solve(["1000",
    "1500",
    "2000",
    "6500"])

solve(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])
    
solve(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])
    