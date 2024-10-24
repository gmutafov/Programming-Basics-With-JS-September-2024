function solve(input) {
    let currentHeight = 5364;
    let daysClimbing = 1;
    let index = 0;

    while (input[index] !== "END") {
        let rest = input[index];
        let metersClimbed = Number(input[index + 1]);
        index += 2;

        if (rest === "Yes") {
            daysClimbing++;
        }

        if (daysClimbing > 5) {
            console.log(`Failed!`);
            console.log(currentHeight);
            return;
        }

        currentHeight += metersClimbed;

        if (currentHeight >= 8848) {
            console.log(`Goal reached for ${daysClimbing} days!`);
            return;
        }
    }

    console.log(`Failed!`);
    console.log(currentHeight);
}

solve(["Yes",
    "1254",
    "Yes",
    "1402",
    "No",
    "250",
    "Yes",
    "635"])

solve(["Yes",
    "1000",
    "Yes",
    "945",
    "No",
    "1200",
    "END"])
    