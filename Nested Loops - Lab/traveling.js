function solve(input) {
    let index = 0;

    while (input[index] !== "End") {
        let destination = input[index++];
        let budget = Number(input[index++]);
        let savedMoney = 0;

        while (savedMoney < budget) {
            savedMoney += Number(input[index++]);
        }

        console.log(`Going to ${destination}!`);
    }
}