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










