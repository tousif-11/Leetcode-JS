/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
};
var missingNumber = function(nums) {
    let number = nums.length;
    for(let i =0; i<nums.length; i++){
        number = number ^i^ nums[i];
    };
    return number
};