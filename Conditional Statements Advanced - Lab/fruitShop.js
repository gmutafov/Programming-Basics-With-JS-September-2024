function solve(fruit, day, quantity) {
    let price = 0;

    switch(day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch(fruit) {
                case 'banana': price = 2.50; break;
                case 'apple': price = 1.20; break;
                case 'orange': price = 0.85; break;
                case 'grapefruit': price = 1.45; break;
                case 'kiwi': price = 2.70; break;
                case 'pineapple': price = 5.50; break;
                case 'grapes': price = 3.85; break;
                default: 
                    console.log("error");
                    return;
            }
            break;

        case 'Saturday':
        case 'Sunday':
            switch(fruit) {
                case 'banana': price = 2.70; break;
                case 'apple': price = 1.25; break;
                case 'orange': price = 0.90; break;
                case 'grapefruit': price = 1.60; break;
                case 'kiwi': price = 3.00; break;
                case 'pineapple': price = 5.60; break;
                case 'grapes': price = 4.20; break;
                default: 
                    console.log("error");
                    return;
            }
            break;

        default:
            console.log("error");
            return;
    }

    let totalPrice = price * quantity;
    console.log(totalPrice.toFixed(2));
}


solve("apple",
"Tuesday",
2
)
solve("orange",
"Sunday",
3
)
solve("kiwi",
"Monday",
2.5
)

solve("tomato",
"Monday",
0.5
)