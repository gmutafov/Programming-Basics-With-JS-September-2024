function calculateStay(month, nights) {
    let studioPricePerNight = 0;
    let apartmentPricePerNight = 0;
    
    switch (month) {
        case 'May':
        case 'October':
            studioPricePerNight = 50;
            apartmentPricePerNight = 65;
            break;
        case 'June':
        case 'September':
            studioPricePerNight = 75.20;
            apartmentPricePerNight = 68.70;
            break;
        case 'July':
        case 'August':
            studioPricePerNight = 76;
            apartmentPricePerNight = 77;
            break;
    }

    let apartmentTotal = apartmentPricePerNight * nights;
    if (nights > 14) {
        apartmentTotal *= 0.90; 
    }

    let studioTotal = studioPricePerNight * nights;
    if (month === 'May' || month === 'October') {
        if (nights > 14) {
            studioTotal *= 0.70;
        } else if (nights > 7) {
            studioTotal *= 0.95; 
        }
    } else if (month === 'June' || month === 'September' && nights > 14) {
        studioTotal *= 0.80; 
    }

    console.log(`Apartment: ${apartmentTotal.toFixed(2)} lv.`);
    console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
}
