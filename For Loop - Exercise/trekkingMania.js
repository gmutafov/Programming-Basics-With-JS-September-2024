function trekingMania(input) {
    let groupCount = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
  
    let totalPeople = 0;
    for (let i = 1; i <= groupCount; i++) {
      let peopleInGroup = Number(input[i]);
  
      if (peopleInGroup <= 5) {
        musala += peopleInGroup;
      } else if (peopleInGroup <= 12) {
        monblan += peopleInGroup;
      } else if (peopleInGroup <= 25) {
        kilimandjaro += peopleInGroup;
      } else if (peopleInGroup <= 40) {
        k2 += peopleInGroup;
      } else {
        everest += peopleInGroup;
      }
      totalPeople += peopleInGroup;
    }
  
    let musalaPercent = (musala / totalPeople) * 100;
    let monblanPercent = (monblan / totalPeople) * 100;
    let kilimandjaroPercent = (kilimandjaro / totalPeople) * 100;
    let k2Percent = (k2 / totalPeople) * 100;
    let everestPercent = (everest / totalPeople) * 100;
  
    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimandjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}