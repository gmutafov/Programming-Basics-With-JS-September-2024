function solve(h, m) {
    let minutes = m + 15
    if (minutes > 59) {
        h += 1;
        minutes -= 60
    }
    if (h > 23) {
        h = 0;
    }
    if (minutes < 10) {
        console.log(`${h}:0${minutes}`)
    } else {
        console.log(`${h}:${minutes}`)

    }
}
solve(0, 01)