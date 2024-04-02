const fs = require('fs')
const path = require('path')
const filePath = process.argv[2]

const STOP_WORDS = [
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'by',
  'for',
  'from',
  'has',
  'he',
  'i',
  'in',
  'is',
  'it',
  'its',
  'of',
  'on',
  'that',
  'the',
  'to',
  'were',
  'will',
  'with',
]

function printWordFreq(file, callback) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      process.exit(1);
    }
    //file->data split at each word
    const wordCount = data
      .toLowerCase()
      .trim()
      .split(/\W+/)
      .filter((word) => word.length > 0)
      .sort();
      console.log(wordCount)
      //put results into empty object
    const frequencyCount = {};
      //for loop that puts word into frequency or ++ if already there
    for (word of wordCount) {
      /* if (word === '') {
        continue;
      } */
      if (STOP_WORDS.includes(word)) {
        continue;
      }
      if (word in frequencyCount) {
        frequencyCount[word]++;
      } else {
        frequencyCount[word] = 1;
      }
    }
    callback(frequencyCount);
  });
}


printWordFreq(filePath, (wordCount) => {
  console.log("the results", wordCount)
})
