function solve(input) {

    let partyPrice = Number(input[0]);
    let loveMessages = Number(input[1]);
    let waxRoses = Number(input[2]);
    let keychains = Number(input[3]);
    let caricatures = Number(input[4]);
    let luckySurprises = Number(input[5]);

    let loveMessagePrices = 0.60;
    let waxRosePrices = 7.20;
    let keychainPrices = 3.60;
    let caricaturePrices = 18.20;
    let luckySurprisePrices = 22.00;

    let totalItems = loveMessages + waxRoses + keychains + caricatures + luckySurprises;
    let totalPrice = (loveMessages * loveMessagePrices) + (waxRoses * waxRosePrices) +
                     (keychains * keychainPrices) + (caricatures * caricaturePrices) +
                     (luckySurprises * luckySurprisePrices);

    if (totalItems >= 25) {
        totalPrice *= 0.65;
    }

    let profit = totalPrice * 0.90;

    if (profit >= partyPrice) {
        let moneyLeft = profit - partyPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = partyPrice - profit;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

solve(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"])

solve(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])
    