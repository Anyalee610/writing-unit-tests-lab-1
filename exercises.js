// Question 1
const isUpperCase = (word) => {
  return true ? word.toUpperCase()=== word: false;
};

// Question 2
const removeVowels = (arrOfWords) => {
  const consonant = /^[^aeiou]/gi;
  let eachLetter = arrOfWords.join(' ').split('').filter(el=> el.match(consonant))
  return arrOfWords.length >0?eachLetter.join('').split(' '):[]
};

// Question 3
const wordCap = (word) => {
  let arrOfWords = word.toLowerCase().split(' ')
  let results = []
  for(let i =0; i < arrOfWords.length; i++){
    results.push(arrOfWords[i].replace(arrOfWords[i][0], arrOfWords[i][0].toUpperCase()));
    
  }
  return results.join(' ')
};

// Question 4
const swapCase = (word) => {
  let arrOfLetters = word.split('');
  let results = ''
  for(let i = 0; i< arrOfLetters.length; i++){
    if(arrOfLetters[i]===arrOfLetters[i].toUpperCase()){
      results+=arrOfLetters[i].toLowerCase()
    }else{
      results+=arrOfLetters[i].toUpperCase()
    }
  } return results
};

// Question 5
const staggeredCase = (word) => {
 let arrOfLetters = word.split('')
 let switchCase = true 
 let letters = /^[a-zA-Z]+$/
 let results = ''

 for(let i = 0; i< arrOfLetters.length; i++){
  if(!arrOfLetters[i].match(letters)){
    results+=arrOfLetters[i];
  }
  else if (switchCase){
    results+=arrOfLetters[i].toUpperCase();
    switchCase=!switchCase;
  }else{
    results+=arrOfLetters[i].toLowerCase();
    switchCase=!switchCase;
  }
 }

 return results

};

// Question 6
const wordLengths = (word = '') => {
 let arrOfWords = word.split(' ');
 let results = [];
 for (let i = 0;i<arrOfWords.length; i++){
  results.push(arrOfWords[i]+" "+arrOfWords[i].length)
 }
 return word.length ===0 ? []: results
};

// Question 7
const searchWord = (word,text) => {
  text = text.replace(/[.,!]/g, ' ');
  return text.toLowerCase().split(' ').filter(el=> el ===word).length
};


// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
