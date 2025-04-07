// import { getRandomWord } from  './readjson.js';

// Alphabet input for keying in by user
const alphabet = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

const words = [
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "pear",
  "peach",
  "plum",
  "melon",
  "lemon",
  "pineapple",
  "mango",
  "papaya",
  "coconut",
  "strawberry",
  "blueberry",
  "raspberry",
  "blackberry",
  "cherry",
  "apricot",
  "tomato",
  "carrot",
  "potato",
  "onion",
  "garlic",
  "pepper",
  "lettuce",
  "broccoli",
  "spinach",
  "zucchini",
  "cucumber",
  "celery",
  "cauliflower",
  "asparagus",
  "mushroom",
  "pumpkin",
  "radish",
  "beetroot",
  "turnip",
  "parsnip",
  "elephant",
  "giraffe",
  "tiger",
  "lion",
  "cheetah",
  "leopard",
  "zebra",
  "rhino",
  "hippo",
  "buffalo",
  "kangaroo",
  "koala",
  "panda",
  "sloth",
  "chimpanzee",
  "gorilla",
  "orangutan",
  "lemur",
  "meerkat",
  "otter",
  "shark",
  "whale",
  "dolphin",
  "seal",
  "octopus",
  "jellyfish",
  "lobster",
  "crab",
  "shrimp",
  "starfish",
  "eagle",
  "sparrow",
  "parrot",
  "penguin",
  "ostrich",
  "flamingo",
  "peacock",
  "hummingbird",
  "owl",
  "falcon",
  "house",
  "apartment",
  "mansion",
  "cottage",
  "bungalow",
  "castle",
  "villa",
  "shack",
  "chalet",
  "palace",
  "bed",
  "chair",
  "table",
  "desk",
  "sofa",
  "couch",
  "cabinet",
  "wardrobe",
  "bookshelf",
  "dresser",
  "car",
  "bicycle",
  "motorcycle",
  "scooter",
  "truck",
  "bus",
  "train",
  "airplane",
  "helicopter",
  "boat",
  "submarine",
  "rocket",
  "spaceship",
  "hovercraft",
  "tram",
  "trolley",
  "taxi",
  "ferry",
  "yacht",
  "canoe",
  "violin",
  "guitar",
  "piano",
  "trumpet",
  "flute",
  "drums",
  "clarinet",
  "saxophone",
  "cello",
  "harp",
  "concert",
  "symphony",
  "melody",
  "harmony",
  "rhythm",
  "tempo",
  "note",
  "scale",
  "chord",
  "tune",
  "dog",
  "cat",
  "rabbit",
  "hamster",
  "goldfish",
  "parakeet",
  "ferret",
  "guinea",
  "chinchilla",
  "gerbil",
  "winter",
  "spring",
  "summer",
  "autumn",
  "snow",
  "rain",
  "hail",
  "sleet",
  "fog",
  "storm",
  "mountain",
  "river",
  "lake",
  "ocean",
  "forest",
  "desert",
  "valley",
  "canyon",
  "island",
  "waterfall",
  "kitchen",
  "bathroom",
  "bedroom",
  "livingroom",
  "garage",
  "basement",
  "attic",
  "hallway",
  "balcony",
  "patio",
  "science",
  "history",
  "math",
  "geography",
  "chemistry",
  "biology",
  "physics",
  "astronomy",
  "literature",
  "philosophy",
  "football",
  "basketball",
  "tennis",
  "golf",
  "soccer",
  "baseball",
  "hockey",
  "cricket",
  "rugby",
  "volleyball",
];

// let hangman = [];

let hangman = getRandomWord();
// let wordlist = []; //for display

let listElem = document.querySelector(".wordlist p");
// listElem.textContent = hangman;

// console.log("first:" + hangman.join());

let maxClicks = hangman.length - 1;
let hangman_loses = 1;
let winFlag = false;
let total_turns = 0;

function getRandomWord() {
  // resetValues();
  const randomInd = Math.floor(Math.random() * words.length);
  const randomWord = words[randomInd];
  return randomWord.toUpperCase().split("");
}

setHintText(hangman);

const board = document.querySelector(".board");

// Get the word-board section where blank buttons will be rendered
const wordBoard = document.querySelector(".word-board");

const playButton = document.getElementById("play");
playButton.addEventListener("click", handlePlayAgainClick);

// Function to render the alphabets on buttons
function renderAlphabet() {
  alphabet.forEach((letter) => {
    const button = document.createElement("alphabutton");
    button.textContent = letter;
    button.classList.add("key");
    button.dataset.letter = button.textContent;
    board.appendChild(button);
    // console.log("reached here before event listener");
    // resetValues();
    button.addEventListener("click", handleclick);
  });
}

function renderBlankButtons() {
  // hangman = getRandomWord();

  //clear first
  //remove event listeners
  const maxClicks = hangman.length - 1;
  let hangman_loses = 1;
  let winFlag = false;
  // console.log("check render blank" + hangman);
  hangman.forEach((inpletter) => {
    const button = document.createElement("inputbutton");
    //button.name = "challengebuttons";
    button.textContent = " ";
    button.classList.add("blank"); // Add a class for styling
    wordBoard.appendChild(button);
  });
}

function handleclick(event) {
  //Dynamic content of input button on clicking alphabets

  // resetValues();
  if (hangman_loses === 11 || winFlag === true) return;
  else {
    // if(button.textContent === undefined) break;
    const button = event.target;
    if (button.style.backgroundColor === "gray") return;

    const clickedLetter = button.textContent;

    button.style.backgroundColor = "gray";
    // button.textContent = "";
    button.style.color = "white";
    // button.setAttribute("disabled", true);

    const inpbuttons = document.querySelectorAll("inputbutton");
    if (clickedLetter === "") return;
    let inpPositions = [];
    // get positions where letter is applicable
    inpPositions = [...hangman]
      .map((item, index) => (item === clickedLetter ? index : -1))
      .filter((index) => index !== -1);

    if (inpPositions.length === 0) changeImage();

    inpPositions.forEach((index) => {
      inpbuttons[index].textContent = clickedLetter;
    });

    winFlag = winorlose();
    if (winFlag === true) {
      let msgElem = document.getElementById("game-message");
      msgElem.textContent = "You won; Try again?";
    }
  }
}

function winorlose() {
  const inpbuttons = document.querySelectorAll("inputbutton");
  if (inpbuttons.length === 0) return false;
  if (inpbuttons.length !== hangman.length) return false;
  for (let i = 0; i < inpbuttons.length; i++) {
    if (inpbuttons[i].textContent !== hangman[i]) {
      return false;
    }
  }
  return true;
}

function changeImage() {
  const imgElem = document.querySelector("img");
  let filename = "./img/h-" + hangman_loses + ".jpg";
  imgElem.src = filename;
  hangman_loses += 1;
  if (hangman_loses === 11) {
    let msgElem = document.getElementById("game-message");
    console.log("for word list" + hangman);
    msgElem.textContent = "Game over; Try again?";
    return;
  }
  return;
}

function handlePlayAgainClick() {
  console.log("resetting now");
  wordBoard.innerHTML = "";
  board.innerHTML = "";

  const alphabuttons = document.createElement("alphabutton");
  alphabuttons.removeEventListener("click", handleclick);

  maxClicks = hangman.length - 1;
  hangman_loses = 1;
  winFlag = false;

  const imgElem = document.querySelector("img");
  let filename = "./img/h-0.jpg";
  imgElem.src = filename;

  renderAlphabet();

  total_turns += 1;
  let temp = hangman.join("").toLowerCase();

  if (total_turns === 20) {
    listElem.textContent = "";
    total_turns = 0;
  }

  listElem.textContent = listElem.textContent + " " + temp;
  hangman = getRandomWord();
  setHintText(hangman);

  renderBlankButtons();
}

function setHintText(txt) {
  let vowelcount = 0;
  for (let i = 0; i < hangman.length; i++) {
    if (txt[i] === "A") vowelcount += 1;
    if (txt[i] === "E") vowelcount += 1;
    if (txt[i] === "I") vowelcount += 1;
    if (txt[i] === "O") vowelcount += 1;
    if (txt[i] === "U") vowelcount += 1;
  }

  let msgElem = document.getElementById("game-message");

  msgElem.textContent =
    "Hint vowels: " +
    vowelcount +
    "," +
    " Consonants: " +
    (Number(txt.length) - vowelcount);
}

// Call functions to render the keyboard and blank buttons
renderBlankButtons();
renderAlphabet();
