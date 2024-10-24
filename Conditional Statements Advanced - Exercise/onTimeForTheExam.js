function examArrival(examHour, examMinute, arrivalHour, arrivalMinute) {
    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;
    
    let timeDifference = arrivalTime - examTime;

    if (timeDifference > 0) {
        console.log("Late");

        if (timeDifference < 60) {
            console.log(`${timeDifference} minutes after the start`);
        } else {
            let hoursLate = Math.floor(timeDifference / 60);
            let minutesLate = timeDifference % 60;
            console.log(`${hoursLate}:${minutesLate < 10 ? '0' + minutesLate : minutesLate} hours after the start`);
        }

    } else if (timeDifference >= -30) {
        console.log("On time");

        if (timeDifference < 0) {
            console.log(`${Math.abs(timeDifference)} minutes before the start`);
        }

    } else {
        console.log("Early");

        let earlyMinutes = Math.abs(timeDifference);
        if (earlyMinutes < 60) {
            console.log(`${earlyMinutes} minutes before the start`);
        } else {
            let hoursEarly = Math.floor(earlyMinutes / 60);
            let minutesEarly = earlyMinutes % 60;
            console.log(`${hoursEarly}:${minutesEarly < 10 ? '0' + minutesEarly : minutesEarly} hours before the start`);
        }
    }
}