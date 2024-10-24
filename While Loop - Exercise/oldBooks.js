function solve(arr){
    let requestedBook = arr[0];
    let counter = 0;

    let index = 1;
    let command = arr[index];
    index++;

    while (command !== 'No More Books'){
        let book = command;
        if (book === requestedBook){
            console.log(`You checked ${counter} books and found it.`);
            return;
            
        }

        counter++;
        command = arr[index];
        index++;
    } 
    console.log("The book you search is not here!")
    console.log(`You checked ${counter} books.`);
    
}

solve(["Troy",
    "Stronger",
    "Life Style",
    "Troy"])

solve(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])
    