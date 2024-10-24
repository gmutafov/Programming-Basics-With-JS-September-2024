function solve(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];

    let nights = days - 1;
    let pricePerNight = 0;

    if (roomType === "room for one person") {
        pricePerNight = 18.00;
    } else if (roomType === "apartment") {
        pricePerNight = 25.00;
    } else if (roomType === "president apartment") {
        pricePerNight = 35.00;
    }

    let totalPrice = nights * pricePerNight;

    if (roomType === "apartment") {
        if (nights < 10) {
            totalPrice *= 0.70;
        } else if (nights <= 15) {
            totalPrice *= 0.65;
        } else {
            totalPrice *= 0.50;
        }
    } else if (roomType === "president apartment") {
        if (nights < 10) {
            totalPrice *= 0.90;
        } else if (nights <= 15) {
            totalPrice *= 0.85;
        } else {
            totalPrice *= 0.80;
        }
    }

    if (rating === "positive") {
        totalPrice *= 1.25;
    } else if (rating === "negative") {
        totalPrice *= 0.90;
    }

    console.log(totalPrice.toFixed(2));
}


solve(["14",
    "apartment",
    "positive"])

    
solve(["30",
    "president apartment",
    "negative"])
    