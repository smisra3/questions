function maxSumSubArray(arr) {
  var max_so_far = 0;
  var max_ending_here = 0;
  for (var index = 0; index < arr.length; index++) {
    max_ending_here += arr[index];
    if (max_ending_here < 0)
      max_ending_here = 0;
    if (max_so_far < max_ending_here)
      max_so_far = max_ending_here;
  }
  return max_so_far;
}

maxSumSubArray([1, 2, 3, 4, -10]);

//  Time = O(n) , space = O(1);