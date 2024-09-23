function solve(chickenMenues, fishMenues, vegeterianMenues){
    let chicken = chickenMenues * 10.35;
    let fish = fishMenues * 12.40;
    let vegeterian = vegeterianMenues * 8.15;
    let desert = (chicken + fish + vegeterian) * 0.2;
    let total = chicken + fish + vegeterian + desert + 2.50;
    console.log(total);
    
}

solve(2, 4 ,3)