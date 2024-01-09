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
    const wordCount = data
      .toLowerCase()
      .split(/\W+/)
      .sort();
    const frequency = {};

    for (word of wordCount) {
      if (STOP_WORDS.includes(word)) {
        continue;
      }
      if (word in frequency) {
        frequency[word]++;
      } else {
        frequency[word] = 1;
      }
    }
    callback(frequency);
  });
}


printWordFreq(filePath, (wordCount) => {
  console.log("the results", wordCount)
})
