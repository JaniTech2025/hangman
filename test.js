hangman = ['A','R', 'T'];
clickedLetter = 
const inpPositions = hangman.filter(n=> (n === clickedLetter));
for(let i of inpPositions){
  console.log(inpPositions[i]);
}