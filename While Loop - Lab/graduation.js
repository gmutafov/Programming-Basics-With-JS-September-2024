function solve(arr){
    let index = 0;
    let name = arr[index]
    index++;

    let gradeSum = 0;
    let i = 1;
    let badGrades = 0;
    let hasExcluded = false;

    while (i <= 12){
        let grade = Number(arr[index]);
        index++;

        if (grade < 4) {
            badGrades++;
            if (badGrades === 2) {
                console.log(`${name} has been excluded at ${i} grade`); 
                hasExcluded = true;
                break;
            }
            continue;
        }

        gradeSum += grade;
        i++;

    }

    if (!hasExcluded){
        let avgGrade = gradeSum / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
    
}


solve(["Gosho", 
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])

solve(["Mimi", 
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])
    