function solve(input) {
    let cpuPriceUSD = Number(input[0]);
    let gpuPriceUSD = Number(input[1]);
    let ramPriceUSD = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = Number(input[4]);

    let usdToBgnRate = 1.57;

    let cpuPriceBGN = cpuPriceUSD * usdToBgnRate * (1 - discount);
    let gpuPriceBGN = gpuPriceUSD * usdToBgnRate * (1 - discount);
    let totalRamPriceBGN = ramPriceUSD * ramCount * usdToBgnRate;

    let totalCostBGN = cpuPriceBGN + gpuPriceBGN + totalRamPriceBGN;

    console.log(`Money needed - ${totalCostBGN.toFixed(2)} leva.`);
}

