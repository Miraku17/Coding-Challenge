# Problem Set 1: Palindrome Pairs

## Problem Description

Given a list of unique words, your task is to find all pairs of distinct indices (i, j) in the list so that
the concatenation of the two words, i.e., words[i] + words[j], forms a palindrome.
Example:
For the input ["bat", "tab", "cat"], the output should be [[0, 1], [1, 0]] because the
palindromes are ["battab", "tabbat"].
Instructions:

1. Palindrome Checking:
   a. A palindrome is a word that reads the same backward as forward (e.g., "radar").
   b. You need to check if the concatenation of two words forms a palindrome.
2. Unique Indices:
   a. Ensure that the pairs of indices are distinct. For example, [0, 1] and [1, 0] are considered
   the same pair.
3. Output Format:
   a. The output should be a list of lists, where each inner list represents a pair of indices that
   form a palindrome.
4. Test Your Solution:
   a. Test your solution with different inputs to ensure it handles various cases.

## Solution Overview

The goal is to find pairs of distinct indices (i, j) in a list of words such that the concatenation of the words at these indices forms a palindrome. Here’s a step-by-step breakdown of how to solve the problem:

1. Palindrome Checking:
   A palindrome is a string that reads the same backward as forward. To check if a concatenated word forms a palindrome:
   1. Reverse the string.
   2. Compare the reversed string with the original string.
   3. If they match, the string is a palindrome.
2. Unique Indices:
   Ensure that pairs (i, j) are distinct and not duplicates of each other. For instance, the pair [0, 1] should be considered distinct from [1, 0].

3. Solution Steps
   1. Define the Palindrome Check Function - Created a function isPalindrome that takes a string and returns true if it is a palindrome, otherwise false.
   2. Iterate Over Word Pairs using Palindrome Pairs Function
   3. Concatenate Words
   4. Check Concatenated Word
   5. If the concatenated word is a palindrome, store the pair (i, j) in the result list.
   6. Return the result list containing all valid index pairs.

## Instructions to Run the Code

To run the file go the to folder directory and type node palindrome_pairs.js in the terminal
