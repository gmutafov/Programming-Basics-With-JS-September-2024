function solve(recordInSeconds, distanceInMeters, timePerMeter) {
    let ivanTime = distanceInMeters * timePerMeter;

    let delayCount = Math.floor(distanceInMeters / 15);

    let totalDelay = delayCount * 12.5;

    ivanTime += totalDelay;

    if (ivanTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`);
    } else {
        let difference = ivanTime - recordInSeconds;
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}
solve(10464, 1500, 20)
solve(55555.67,
3017,
5.03
)