let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let excusa = document.getElementById("excuse")

function numeroRandom (largo){
    let numRam = Math.random()*(largo.length);
    numRam = Math.floor(numRam); 
    return numRam
}

let primeraParte = who[numeroRandom(who)];
let segundaParte = action[numeroRandom(action)];
let terceraParte = what[numeroRandom(what)];
let cuartaParte = when[numeroRandom(when)];

excusa.innerHTML= primeraParte+" " +segundaParte +" "+ terceraParte +" "+ cuartaParte
