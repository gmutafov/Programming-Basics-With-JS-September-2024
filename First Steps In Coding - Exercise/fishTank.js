function solve(length, width, height, percent){
    let area = length * width * height;
    let liters = area / 1000;
    let neededLiters = liters * (1 - (percent / 100));
    console.log(neededLiters);
    
}

solve(85, 75, 47, 17)