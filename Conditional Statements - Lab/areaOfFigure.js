function solve(arg1, arg2, arg3) {
    let figure = arg1
    let area = 0

    if (figure === 'square'){
        area = arg2 * arg2
    } else if (figure === 'rectangle'){
        area = arg2 * arg3
    } else if (figure === 'circle'){
        area = (arg2 * arg2) * Math.PI
    } else if (figure === 'triangle'){
        area = (arg2 * arg3) / 2
    }
    console.log(area.toFixed(3));
    
}

solve('square', 5)
solve('rectangle', 7, 2.5)
solve('circle', 6)
solve('triangle', 4.5, 20)