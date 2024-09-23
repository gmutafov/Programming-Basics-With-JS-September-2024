function solve(day){
    let price = 0;
    if (day === 'Monday' || day === 'Tuesday' || day === 'Friday'){
        price = 12;
    } else if (day === 'Wednesday' || day === 'Thursday'){
        price = 14;
    } else {
        price = 16;
    }
    console.log(price);
    

}

solve('Monday')
solve('Friday')
solve('Sunday')