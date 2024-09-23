function solve(series, duration, breakDur){
    let lunchDur = (1 / 8) * breakDur;
    let leisure = (1 / 4) * breakDur;

    let seriesTime = breakDur - lunchDur - leisure;

    if (seriesTime >= duration) {
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(seriesTime - duration)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(duration - seriesTime)} more minutes.`)
    }
}

solve('Game of Thrones', 60, 96);