function solve(budget, gpus, cpus, ram){
    let totalGpus = gpus * 250;
    let totalCpus = cpus * (0.35 * totalGpus);
    let totalRam = ram * (0.1 * totalGpus);

    let totalPrice = totalGpus + totalCpus + totalRam;

    if (gpus > cpus){
        totalPrice *= 0.85
    }
    if (budget >= totalPrice){
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`)
    }
}

solve(900,
2,
1,
3
)
solve(920.45,
3,
1,
1
)