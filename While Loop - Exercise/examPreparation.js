function solve(arr){
    let maxBadGrades = Number(arr[0]);

    let badGrades = 0;
    let grades = 0;
    let counter = 0;
    let lastProblem = '';
    let index = 1;
    let command = arr[index];
    index++;

    while (command !== 'Enough'){
        lastProblem = command;
        let grade = Number(arr[index]);
        index++;

        if (grade <= 4){
            badGrades++;

            if (badGrades === maxBadGrades){
                console.log(`You need a break, ${badGrades} poor grades.`);
                return;
            }
        }
        counter++;
        grades += grade;
        command = arr[index]
        index++;
    }
    avgGrade = grades / counter;
    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${counter}`);
    console.log(`Last problem: ${lastProblem}`);
    
    
    
}

solve(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
    