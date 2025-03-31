//  pick a random word from wordlist in json file
export const getRandomWord = () => {
    fetch('./wordlist.json')
        .then(response => {
              return response.json();
        })      
        .then(data => {
            const words = data.words;
            // console.log(words[13]);
            const randomInd = Math.floor(Math.random() * words.length);
            // return(words[randomInd]);
            console.log(words[randomInd]);
          })
        .catch(error => {
            console.error('Error fetching the JSON file:', error); 
          });
}

// getRandomWord();



