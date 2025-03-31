hangman = ["A", "R", "T"];
// clickedLetter =
// const inpPositions = hangman.filter(n=> (n === clickedLetter));
// for(let i of inpPositions){
//   console.log(inpPositions[i]);
// }

const vowels = ["A", "E", "I", "O", "U"];
let vowelcount = 0;
let consonantCount = Number(hangman.length);
for (let i = 0; i < hangman.length; i++) {
  if (hangman[i] === "A") vowelcount++;
  if (hangman[i] === "E") vowelcount++;
  if (hangman[i] === "I") vowelcount++;
  if (hangman[i] === "O") vowelcount++;
  if (hangman[i] === "U") vowelcount++;
}

// let consonants = - parseInt(vowels);

console.log(vowelcount);
console.log(Number(hangman.length) - vowelcount);
