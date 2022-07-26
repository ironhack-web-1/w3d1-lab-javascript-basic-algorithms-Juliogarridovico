for (i = 0; i < 1000; i++) {
  console.log(""); // un pequeño bucle para meter espacios y dar una falsa sensacion de limpiar la pantalla ¬.¬
}
console.log("I'm ready!");
// Iteration 1: Names and Input
//
console.log("");

let hacker1 = "Julio";
let hacker2 = "Radar";
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is  " + hacker2);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has" + hacker1 + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    " It seems that the navigator has the longest name, it has" +
      hacker2 +
      " characters"
  );
} else {
  console.log("What?! You both have the same name?");
}
// Iteration 3: Loops

//3-1 separar todas las letras del conductor con un espacio y pasarlo a mayusculas
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// con split cojo la variable hacker y la divido en un array para cada digito, con .join meto una separacio entre posiciones del array. Aunque podria ser un guion, una coma o lo que sea.
// console.log(hacker1.split("").join(""))
console.log("");

let resultado = "";
for (i = 0; i < hacker1.length; i++) {
  resultado += hacker1[i].toUpperCase() + " ";
}
console.log(resultado);
//3.2 la variable hacker2 escrita al reves

// console.log(hacker2.split("").reverse().join("")); // solucion sin loops como se ve en la ejecucion del script funciona perfectamente
// console.log(hacker2.length);

let patras=""
for( j=hacker2.length-1;j>=0;--j){
    patras+=hacker2[j];
}
console.log(patras);

// //3.3
console.log(" ")
if(hacker2>hacker1){

    console.log("The navigator goes first definitely: "+hacker1);
}
else if(hacker2===hacker1){
    console.log("What?! You both have the same name?");
}else{
    console.log("the driver\´s name goes first:"+hacker1);
}

///////////////////////////

/* if (hacker1 > hacker2)
    console.log("The driver's name goes first.");
else if (hacker2 > hacker1)
    console.log("Yo, the navigator goes first definitely.");
else
    console.log("What?! You both have the same name?"); */


/////////////BONUS///////////////////////

// Bonus 1: Count the number of words in the string
const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue condimentum porta. Donec sem tellus, tincidunt et est eu, fringilla vestibulum turpis. Fusce dapibus, leo et auctor lacinia, nunc lacus malesuada est, at interdum nibh leo sed leo. Fusce aliquam finibus tortor quis auctor. Proin maximus mi in dictum auctor. Cras fermentum nisi sed mi consequat, sit amet rhoncus magna tristique. Mauris aliquam tincidunt nunc hendrerit malesuada. Praesent eget nisl augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam lorem ligula, malesuada eleifend quam sed, molestie dapibus massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus velit lectus, ullamcorper pharetra nisl nec, tincidunt hendrerit urna. Sed id ullamcorper leo, ut vulputate quam. Sed eu arcu at elit rhoncus lacinia. Sed aliquam libero sed turpis pulvinar, sed blandit nisi mollis. Mauris felis nulla, tempus sit amet ante eu, condimentum vestibulum justo.

Maecenas non nisi viverra, semper justo a, hendrerit ligula. Fusce interdum metus elit, ut imperdiet turpis posuere eu. Nullam dignissim sollicitudin libero, ut lacinia purus varius nec. Fusce interdum ex in bibendum imperdiet. Proin ac eros diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque dui purus, viverra quis scelerisque at, sodales vitae nisl. Sed scelerisque massa at lobortis pellentesque. Pellentesque in consequat diam, nec congue dolor. Proin ac est ultrices, ultricies lectus sit amet, pellentesque dolor. Maecenas vitae elit metus.

Curabitur at ex eu augue tempor maximus. Fusce sodales diam ac leo volutpat, sodales molestie neque molestie. Praesent et pretium elit, accumsan sagittis sem. Proin euismod, enim vitae mollis cursus, ante magna iaculis ex, quis mollis ipsum sapien a nulla. Donec ultrices, risus vel ultricies vulputate, quam enim vestibulum massa, vitae euismod lorem lorem ac tortor. Etiam vulputate id sem eget pellentesque. Sed malesuada tristique quam ut auctor. Sed quam metus, maximus quis faucibus sit amet, semper ac purus. Quisque sed ipsum arcu. Vestibulum non urna pellentesque quam volutpat porta vel et nisl. Nam imperdiet auctor ipsum ac cursus. Integer vel nunc eget ligula porta dictum.
`;

// Bonus 1: Count the number of words in the string
let words = 0;
let returns = 0;
let loremCopy= lorem;

for (var i = 0; i < loremCopy.length; i++) {
    if (loremCopy[i] === ".") loremCopy[i] = " ";
    if (loremCopy[i] === ",") loremCopy[i] = " ";
    if (loremCopy[i] == '\n') {
        returns++;
    }
}

for (var character of loremCopy) {
    if (character === " " ) words++;
}

let totalWords = words + (returns / 2);
console.log(`Lorem Ipsum contains ${totalWords} words.`);

// Bonus 1: Count the number of times the Latin word 'et' appears
let etCounter = 0;

for (var i = 0; i < lorem.length; i++) {
    if (lorem[i] === "e" && lorem[i+1] === "t") {
        if (lorem[i-1] === " " && lorem[i+2] === " ") {
            etCounter++;
        }
    }
}

console.log(`Lorem Ipsum contains ${etCounter} 'et' words.`);

// Bonus 2: Check if a given phrase is a Palindrome.
let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleanPhrase = ""
let reversePhrase= "";

for (var i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i].toUpperCase() != phraseToCheck[i].toLowerCase()) 
        cleanPhrase += phraseToCheck[i];
}

for (var i = phraseToCheck.length - 1; i >= 0; i--) {
    if (phraseToCheck[i].toUpperCase() != phraseToCheck[i].toLowerCase()) 
        reversePhrase += phraseToCheck[i];
}

if (cleanPhrase.toUpperCase() === reversePhrase.toUpperCase())
    console.log(`The phrase "${phraseToCheck}" is palindrome!`);
else
console.log(`Ups, the phrase "${phraseToCheck}" is NOT a palindrome...`);
