# Problem Set X: Longest Increasing Subsequence

## Problem Description

Given an unsorted array of integers, find the length of the longest increasing subsequence. The "Longest Increasing Subsequence" is a common problem in computer science and dynamic programming.

In the context of an array of integers, the goal is to find the length of the longest subsequence such that all elements of the subsequence are sorted in increasing order.

A subsequence is a sequence of elements that appear in the same order as they are in the original sequence, but not necessarily consecutively. An increasing subsequence is one where the elements are in strictly increasing order.

For example, given the array: `[10, 9, 2, 5, 3, 7, 101, 18]`, one possible increasing subsequence is `[2, 5, 7, 18]`, and the length of this subsequence is 4.

The goal is to find the length of the longest increasing subsequence for a given array. Solving this problem efficiently often involves dynamic programming techniques, where you build up a solution for each subproblem and use those solutions to solve the overall problem.

### Example

**Input:** `[10, 9, 2, 5, 3, 7, 101, 18]`  
**Output:** `4`

## Solution Overview

The lengthOfLIS function calculates the length of the longest increasing subsequence in a given array of integers. The approach uses dynamic programming as follows:

1. Initialization: An array array is created to store the length of the longest increasing subsequence that ends at each index. Initially, every position in array is set to 1, since the minimum length of an increasing subsequence is 1 (the element itself).

2. Dynamic Programming Loop: The outer loop iterates through each element in the nums array starting from the second element. For each element, the inner loop checks all previous elements to determine if they can be part of an increasing subsequence. If nums[j] < nums[i], the length of the subsequence ending at i is updated to be the maximum of its current value and array[j] + 1.

3. Result Calculation: Finally, the function returns the maximum value from the array, which represents the length of the longest increasing subsequence in the input array.

## Instructions to Run the Code

To run the file go the to folder directory and type node longest_increasing_subsequence.js in the terminal
