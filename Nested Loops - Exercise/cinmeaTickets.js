function solve(arr){
    let studentTicketCount = 0;
    let standardTicketCount = 0;
    let kidTicketCount = 0;

    let index = 0;
    let command = arr[index];
    index++;

    while (command !== 'Finish'){
        let movieTitle = command;
        let totalSeats = Number(arr[index]);
        index++;
        
        let takenSeats = 0;

        let command1 = arr[index];
        index++;

        while(command1 !== 'End'){
            let ticketType = command1;
            
            if (ticketType === 'standard'){
                standardTicketCount++;
            } else if (ticketType === 'student'){
                studentTicketCount++;
            } else if (ticketType === 'kid'){
                kidTicketCount++;
            }

            takenSeats++;

            if (takenSeats === totalSeats){
                break;
            }

            command1 = arr[index];
            index++;
        }
        console.log(`${movieTitle} - ${((takenSeats / totalSeats) * 100).toFixed(2)}% full.`);
        
        
        command = arr[index];
        index++;
    }
    let totalTicketCount = standardTicketCount + studentTicketCount + kidTicketCount
    console.log(`Total tickets: ${totalTicketCount}`);
    console.log(`${((studentTicketCount / totalTicketCount) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTicketCount / totalTicketCount) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTicketCount / totalTicketCount) * 100).toFixed(2)}% kids tickets.`);
    
    
}

solve(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
    