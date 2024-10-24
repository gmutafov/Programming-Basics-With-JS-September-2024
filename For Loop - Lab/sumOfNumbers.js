function solve(text){
    let sum = 0;
    for (let i = 0; i < text.length; i++){
        let char = Number(text.charAt(i));
        sum += char;
        
    }
    console.log(`The sum of the difits is:${sum}`);
    
}


solve("1234")