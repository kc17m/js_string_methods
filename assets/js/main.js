// lev1_1

let firstName = "Lara";
let lastName = "Croft";

console.log(firstName.length);
console.log(lastName.length);

// lev1_2

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf("h")); //27
console.log(txt.indexOf("Earth")); //38
console.log(txt.indexOf("Moon")); // -1 - nicht enthalten

// lev1_3

var txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log(txt2.search(";")); //34
console.log(txt2.search("green")); // 6
console.log(txt2.search("blue")); // -1 - nicht enthalten

// lev1_7
const text01 = "Sam is good at codingschool";

// let output = document.getElementById("output");
console.log(output);

let bad = text01.replace("good at codingschool", "bad at school");
console.log(bad);
// output.innerHTML = bad;

let good = bad.replace("bad", "good");
console.log(good);
// output.innerHTML += good;

let tennis = good.replace("school", "tennis");
console.log(tennis);
// output.innerHTML += tennis;

// document.write(text01 + "<br>" + bad + "<br>" + good + "<br>" + tennis);
output.innerHTML = `${text01} <br> ${bad} <br> ${good} <br> ${tennis}`

// lev1_8

const text = "Sam is going to codingschool";

let upper = text.replace("codingschool", "school").toLocaleUpperCase();

let output2 = document.getElementById("output02");
output2.innerHTML = `${text} <br> ${upper}`;

let lower = upper.toLowerCase().replace("to", "at");
output2.innerHTML += `<br> ${lower}`;

let upperSchool = upper.replace("IS GOING TO", "is going to");
output2.innerHTML += `<br> ${upperSchool}`;

let upperGoing = upper.toLowerCase().replace("is going to", "IS GOING TO")
output2.innerHTML += `<br> ${upperGoing}`;

let allCaps = upper.toLowerCase().replace("sam is going to school", "Sam Is Going To School");
output2.innerHTML += `<br> ${allCaps}`;

// document.write("<br>" + upper + "<br>" + lower + "<br>" + upperSchool + "<br>" + upperGoing + "<br>" + allCaps);

// template literals lev1_1

// let fName = "Lara";
// let lastName = "Croft";
let age = "pretty old";
let placeBirth = "Detroit Rock City";
let height = "six feet";
let weight = "60 pounds";
let hobbies = "acting as a major movie star";
let favGames = "Tomb Raider";
let favFood = "fish'n'chips";
let favSports = "Winter Olympics at China";
let favBrand = "Levis";
let favSeason = "autumn";
let buddy = "Clark Kent";
let favPlace = "Krypton";

let myText = `Hello my name is ${firstName} ${lastName}, I am ${age} and was born in ${placeBirth}. My weight is ${weight} and I like ${hobbies} as well as playing ${favGames} on my super cinema widescreen laptop computer eating ${favFood}. These days I often watch ${favSports}, even if I don't like a couple of their government admistrative decisions. I often wear ${favBrand} jeans and like to go for a walk in ${favSeason} with my best buddy ${buddy} on ${favPlace}.`;

console.log(`Hello my name is ${firstName} ${lastName}, I am ${age} years old and was born in ${placeBirth}. My weight is ${weight} and I like ${hobbies} and playing ${favGames} on my computer. Also, I like to eat ${favFood} and at these times I often watch ${favSports}, even if I don't like some of the things, the government does. I often wear ${favBrand} jeans and like to go for a walk in ${favSeason} with my best buddy ${buddy} on ${favPlace}.`);


let output3 = document.getElementById("output03");

output3.innerHTML = myText;


// lev1_2
// Brain Damage Songtext
// The lunatic is on the grass
// The lunatic is on the grass
// Remembering games and daisy chains and laughs
// Got to keep the loonies on the path

// The lunatic is in the hall
// The lunatics are in my hall
// The paper holds their folded faces to the floor
// And every day the paperboy brings more


// And if the dam breaks open many years too soon
// And if there is no room upon the hill
// And if your head explodes with dark forebodings too
// I'll see you on the dark side of the moon

// The lunatic is in my head
// The lunatic is in my head
// You raise the blade, you make the change
// You rearrange me 'til I'm sane
// You lock the door
// And throw away the key
// There's someone in my head but it's not me

// And if the cloud bursts, thunder in your ear
// You shout and no one seems to hear
// And if the band you're in starts playing different tunes
// I'll see you on the dark side of the moon

let title = "Brain Damage Songtext";
let grass = "is on the grass";
let lunatic = "The lunatic";
let chains = "and daisy chains and laughs";
let loonies = "the loonies on the path";
let paperboy = "paperboy brings more";
let hall = "hall";
let andIf = "And if the"
let andIf2 = "And if your head"
let head = "is in my head";
let notMe = "but it's not me"
let lastLine = "I'll see you on dark side of the moon";
let door = "You lock the door";
let keys = "And throw away the key";
let thunder = "thunder in your ear";
let hear = "no one seems to hear";
let faces = "faces to the floor";

let output4 = document.getElementById("output04");

let brainDamage =
    `<h2>${title}</h2> <br>
    ${lunatic} ${grass} <br>
    ${lunatic} ${grass} <br>
    Remembering games and ${chains} <br>
    Got to keep ${loonies} <br><br>
    ${lunatic} is in the ${hall} <br>
    ${lunatic}s are in my ${hall} <br>
    The paper holds their folded faces to the floor <br>
    And every day the ${paperboy} <br><br>
    ${andIf} dam breaks open many years too soon <br>
    ${andIf}re is no room upon the hill <br>
    ${andIf2} explodes with dard forebodings too <br>
    ${lastLine} <br><br>
    ${lunatic} ${head} <br>
    ${lunatic} ${head} <br>
    You raise the blade, you make the change<br>
    You rearrange me 'til I'm sane<br>
    ${door}<br>
    ${keys}<br>
    There's someone in my head but ${notMe}<br><br>
    ${andIf} cloud bursts, ${thunder}<br>
    You shout and no one seems to hear<br> 
    ${andIf} band your're in starts playing different tunes<br>
    ${lastLine}
    `;

output4.innerHTML = brainDamage;












