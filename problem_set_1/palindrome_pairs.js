function isPalindrome(word) {
  // Reverse the string and compare it with the original string
  return word === word.split('').reverse().join('');
}

function palindromePairs(words) {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j) {
        const concatenatedWord = words[i] + words[j];

        if (isPalindrome(concatenatedWord)) {
          result.push([i, j]);
        }
      }
    }
  }

  return result;
}

// Example usage
const words = ["bat", "tab", "cat"];
const moreWords = ["abc", "cba", "race", "car"];
const pairs = palindromePairs(words);
const pairs2 = palindromePairs(moreWords);

console.log("Pair 1:", pairs); // Output: [[0, 1], [1, 0]]
console.log("Pair 2:", pairs2); // Output: [[0, 1], [1, 0], [2, 3]]
