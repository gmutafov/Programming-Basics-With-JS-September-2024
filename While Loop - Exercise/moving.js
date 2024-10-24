function solve(arr){
    let width = Number(arr[0]);
    let length = Number(arr[1]);
    let height = Number(arr[2]);
    let volume = width * length * height;

    let index = 3;
    let command = arr[index];
    index++;

    while (command !== 'Done'){
        let boxes = Number(command);
        volume -= boxes;

        if (volume <= 0){
            let volumeNeeded = Math.abs(volume)
            console.log(`No more free space! You need ${volumeNeeded} Cubic meters more.`);
            return;
        }
        
        command = arr[index];
        index++;
    }
    console.log(`${volume} Cubic meters left.`);
    
}

solve(["10", 
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])
    