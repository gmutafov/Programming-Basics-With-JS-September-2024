function solve(type, rows, columns){
    let price = 0;
    let cinema_hall = rows * columns;
    switch (type) {
        case 'Premiere':
            price = 12.00;
            break;
        case 'Normal':
            price = 7.50;
            break;
        case 'Discount':
            price = 5.00;
            break;
    }
    let totalPrice = price * cinema_hall;
    console.log(`${totalPrice.toFixed(2)} leva`);
    
}

solve("Premiere",
10,
12
)
solve("Normal",
21,
13
)
solve("Discount",
12,
30
)