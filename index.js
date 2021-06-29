function scuberGreetingForFeet(someValue){
  if (someValue <= 400){
    return "This one is on me!";
  } else if (someValue > 2000 && someValue <= 2500){
    return "I will gladly take your thirty bucks.";
  } else {
  return "No can do.";
}
}

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
switch(tip) {
  case 'generous' : 
    return "Thank you so much.";
  break;
  case 'not as generous' : 
    return "Thank you.";
  default: 
    return "Bye.";
}
}
// const order = 'cheeseburger';

// let ingredients;

// switch (order) {
//     case 'cheeseburger':
//         ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
//         break;
//     case 'hamburger':
//         ingredients = 'bun, burger, lettuce, tomato, onion';
//         break;
//     case 'malted':
//         ingredients = 'milk, ice cream, malted milk powder';
//         break;
//     default:
//         console.log("Sorry, that's not on the menu right now.");
//         break;
