function solve(deposit, months, interest){
    let total = deposit + months * ((deposit * interest / 100) / 12)
    console.log(total);
    
}

solve(200, 3, 5.7)
solve(2350, 6, 7)