function solve(input) {
    let n = Number(input[0]);
    let totalSales = 0;
    let totalRating = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        let rating = num % 10;
        let possibleSales = Math.floor(num / 10);

        switch (rating) {
            case 2:
                totalSales += 0 * possibleSales;
                break;
            case 3:
                totalSales += 0.5 * possibleSales;
                break;
            case 4:
                totalSales += 0.7 * possibleSales;
                break;
            case 5:
                totalSales += 0.85 * possibleSales;
                break;
            case 6:
                totalSales += 1 * possibleSales;
                break;
        }

        totalRating += rating;
    }

    let averageRating = totalRating / n;

    console.log(totalSales.toFixed(2));
    console.log(averageRating.toFixed(2));
}


solve(["3",
    "103",
    "103",
    "103"])
    
solve(["5",
    "122",
    "156",
    "202",
    "214",
    "185"])
        