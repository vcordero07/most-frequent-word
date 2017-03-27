console.clear();
//Analyze the mostFrequentWords program
//This program takes a strings and check which words or character gets
//-repeated the most.
//It does this by converting the string to an array and later into an object


function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array

  // console.log("*rawString", rawString);
  // console.log("*toLowerCase + split + filter + sort:", rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort());

  //first it converts everything to lower case
  //then it splits the string with the separator space
  //then it filter the string to convert anything falsy to thruty or thruth
  //example in this case it converts the -7 to a positive 7
  //and finally the string get sorted

  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function mostFrequentWord(text) {
  //call the getTokens function that convert the string to an array
  var words = getTokens(text);
  //console.log("Array word:", words);

  //creates the wordFrequencies object
  var wordFrequencies = {};

  //loop thru the array and assing the word[i] as a key in the object,
  //plus it gives the keys a value of 1 or more depending
  //the num of time it appears in the array.
  for (var i = 0; i <= words.length; i++) {
    if (words[i] in wordFrequencies) {
      wordFrequencies[words[i]]++;
    }
    else {
      wordFrequencies[words[i]]=1;
    }
  }
  //console.log("*currentMaxKey:", Object.keys(wordFrequencies)[0]);
  var currentMaxKey = Object.keys(wordFrequencies)[0];
  //console.log("*currentMaxCount:", wordFrequencies[currentMaxKey]);
  var currentMaxCount = wordFrequencies[currentMaxKey];

  //in this loop the it gets the currentMaxKey, which is the word that repeats
  //the most in the program. It also assings the value and word more used to
  //currentMaxKey & currentMaxCount
  for (var word in wordFrequencies) {
    if (wordFrequencies[word] > currentMaxCount) {
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }
  }
  console.log("*wordFrequencies:", wordFrequencies);
 // console.log("*currentMaxKey:", currentMaxKey);

  //return the key in the object which gets repeated the most
  //in this case 'things', because it gets repeated 4 times.
  return currentMaxKey;
}

mostFrequentWord("Sometimes good things fall apart so better things can fall together.12345678 * ( ) & * * ( ) ! @  # $ % ^ & things things -7" );
