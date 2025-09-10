function MaximumSubArrayAverageWithK(arr, k) {
    let sum = arr.slice(0, k).reduce((acc, curr) => {
        acc += curr;
        return acc;
    }, 0);

    let currentIndex = k;
    let startIndex = 0;
    let averageMaxSum = (sum * 1.0) / k;
    while (currentIndex < arr.length) {
        sum = (sum + arr[currentIndex]) - arr[startIndex];
        if ((sum / k) > averageMaxSum) {
            averageMaxSum = sum / k;
        }
        currentIndex += 1;
        startIndex += 1;
    }

    return averageMaxSum; // Return the average without formatting
}

function main() {
    const arr = [3, 3, 4, 3, 0]; // Input array
    const k = 3;                 // Size of the subarray
    console.log(MaximumSubArrayAverageWithK(arr, k)); // Outputs the average
}
main();
