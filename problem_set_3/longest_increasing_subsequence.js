function lengthOfLIS(nums) {
  const n = nums.length;
  const array = new Array(n).fill(1);

  if (!nums || n === 0) {
    return 0;
  }

  for (i = 1; i < n; i++) {
    for (j = 0; j < i; j++) {
      if (nums[j]< nums[i]) {
        array[i] = Math.max(array[i], array[j] + 1);

      }
    }
  }
  return Math.max(...array);

}

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4
