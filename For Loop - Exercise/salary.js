function solve(input){

    let tabs = input[0]
    let salary = input[1]

    for (let i = 2; i <= tabs + 1; i++){
        let currentSite = input[i];

        if (currentSite == 'Facebook'){
            salary -= 150;
        } else if (currentSite == 'Instagram'){
            salary -= 100;
        } else if (currentSite == 'Reddit'){
            salary -= 50;
        }

        if (salary <= 0){
            console.log('You have lost your salary.');
            return;
        }
    }
    console.log(salary);
    
}

solve([10,
    750,
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]
    )

solve([3,
    500,
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"]
    )