# Problem Set 2: Valid Parentheses

## Problem Description

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is
valid. An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
   Examples:
   Input: ()[]{}
   Output: True
   Input: ([)]
   Output: False
   Instructions:
3. Bracket Matching:
   a. Pay attention to matching different types of brackets correctly.
4. Order of Closing:
   a. Ensure that open brackets are closed in the correct order.
5. Output Format:
   a. The output should be a boolean indicating whether the input string is valid or not.
6. Test Your Solution:
   a. Test your solution with various strings to verify its correctness.

## Solution Overview

To approach the solution to this challenged, I used a stack. This is ideal for this problem because it operates on a LIFO (Last In, First Out) princple, which helps in matching the most recent opening bracket with a corresponding closing bracket. 1. Initialize an empty stack 
2. Create an object bracket pairs to map each closing bracket with its corresponding opening bracket 
3. Iterate Over the String 
4. If the character is an opening bracket ((, {, [), we push it onto the stack.
5. If the character is a closing bracket (), }, ]), we check two conditions:
If the stack is empty, it means there's no matching opening bracket, so we return false.
If the top element of the stack (obtained using stack.pop()) does not match the corresponding opening bracket from bracketPairs, we return false.

## Instructions to Run the Code

To run the file go the to folder directory and type node valid_parentheses.js in the terminal
