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
  // Read in `file` and print out the frequency of words in that file.
  fs.readFile('/home/atlas/momentum/code/javascript/node/node-js-word-frequency-Austin-Cathey/the-hill-we-climb.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err)
      process.exit(1)
    } else (wordCount) => {
    // TODO: write code to count the words in the file
    const array = file.trim().split(""); 
    
    console.log(, data)
    callback()
    }
  })
}

printWordFreq(filePath, (wordCount) => {
  console.log(callback, wordCount)
})
