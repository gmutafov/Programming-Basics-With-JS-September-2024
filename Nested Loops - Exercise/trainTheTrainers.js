function solve(arr){
    let judgeCount = Number(arr[0]);
    let totalGradeSum = 0;
    let totalPresCount = 0;
    let index = 1;
    let command = arr[index];
    index++;

    while (command !== 'Finish'){
        let presentationTitle = command;
        let gradeSum = 0;
        for (let currentJudge = 1; currentJudge <= judgeCount; currentJudge++){
            let grade = Number(arr[index]);
            index++;

            gradeSum += grade;
        }

        let avgPresGrade = gradeSum / judgeCount;
        console.log(`${presentationTitle} - ${avgPresGrade.toFixed(2)}.`);

        totalPresCount++;
        totalGradeSum += avgPresGrade;

        command = arr[index];
        index++;
    }
    let totalAvgGrade = totalGradeSum / totalPresCount;
    
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);
    
}


solve(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])
    