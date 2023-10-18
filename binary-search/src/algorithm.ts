export function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + right);
        const item = nums[mid];

        if (item === target) {
            return mid;
        }
        else if (item > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return left;
};
