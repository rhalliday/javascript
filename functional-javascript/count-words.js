function countWords(inputWords) {
  return inputWords.reduce((words, currentWord) => {
    words[currentWord] = ++words[currentWord] || 1;
    return words;
  }, {});
}

module.exports = countWords;
