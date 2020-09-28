function madLibOne() {
  const adjOne = prompt("type an adjective");
  const placeOne = prompt("type a general place");
  const PluralVehicle = prompt("type a vehicle name (plural)");
  const game = prompt("type the name of a game");
  const pluralNoun = prompt("type a plural noun");
  const verbOne = prompt("type an 'ing' verb");
  const verbTwo = prompt("type another 'ing' verb");
  const PluralFood = prompt("type a food name (plural)");
  const sport = prompt("type the name of a sport");
  const verbThree = prompt("type another 'ing' verb");
  const emotion = prompt("type an emotion");
  const number = prompt("type a number");

  const storyOne = `A vacation is when you take a trip to some ${adjOne} place near an amazing ${placeOne}. A good vacation place is one where you can ride ${PluralVehicle} or play ${game} or go hunting for ${pluralNoun}. I like to spend my time ${verbOne} or ${verbTwo}. When parents go on a vacation, they spend their time eating three ${PluralFood} a day. Usually, fathers play ${sport}, and mothers spend their time ${verbThree}. Adults need vacations more than kids because adults are always very ${emotion} because they have to work ${number} hours every day all year just to afford their vacations!`;

  document.querySelector(".story").innerHTML = storyOne;
}

function madLibTwo() {
  const adjOne = prompt("type an adjective");
  const placeTwo = prompt("type a famous place");
  const pluralNoun = prompt("type a plural noun");
  const adjTwo = prompt("type another adjective");
  const PluralFood = prompt("type a food (plural)");
  const emotion = prompt("type an emotion");
  const verbOne = prompt("type an 'ing' verb");
  const placeOne = prompt("type a common place");
  const adjThree = prompt("type another adjective");
  const nounOne = prompt("type a noun");
  const adjFour = prompt("type another adjective");
  const anotherNoun = prompt("type another noun");
  const familyMember = prompt("type a family member");
  const adjFive = prompt("type another adjective");

  const storyTwo = `Today we took a ${adjOne} fieldtrip to ${placeTwo}. They're famous for making ${pluralNoun} and for cooking ${adjTwo} ${PluralFood}. Eating all that food made me feel ${emotion}. Next we enjoyed the local tradition of ${verbOne} in the middle of the ${placeOne}! Finally, we went shopping for souvenirs. I bought a ${adjThree} ${nounOne} for myself, and a ${adjFour} ${anotherNoun} for my favorite ${familyMember}. I'll definitely never forget this ${adjFive} trip!`;

  document.querySelector(".story").innerHTML = storyTwo;
}
