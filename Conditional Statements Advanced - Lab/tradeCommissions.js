function solve(city, sales) {
    let commissionRate = 0;

    if (sales < 0) {
        console.log("error");
        return;
    }

    switch(city) {
        case 'Sofia':
            if (sales <= 500) {
                commissionRate = 0.05;
            } else if (sales <= 1000) {
                commissionRate = 0.07;
            } else if (sales <= 10000) {
                commissionRate = 0.08;
            } else {
                commissionRate = 0.12;
            }
            break;

        case 'Varna':
            if (sales <= 500) {
                commissionRate = 0.045;
            } else if (sales <= 1000) {
                commissionRate = 0.075;
            } else if (sales <= 10000) {
                commissionRate = 0.10;
            } else {
                commissionRate = 0.13;
            }
            break;

        case 'Plovdiv':
            if (sales <= 500) {
                commissionRate = 0.055;
            } else if (sales <= 1000) {
                commissionRate = 0.08;
            } else if (sales <= 10000) {
                commissionRate = 0.12;
            } else {
                commissionRate = 0.145;
            }
            break;

        default:
            console.log("error");
            return;
    }

    let commission = sales * commissionRate;
    console.log(commission.toFixed(2));
}

solve("Sofia",
1500
)
solve("Plovdiv",
499.99
)
solve("Varna",
3874.50
)
solve("Kaspichan",
-50
)