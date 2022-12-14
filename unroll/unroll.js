function unroll(squareArray) {
    let upper = 0;
    let left = 0;
    let right = squareArray[0].length - 1;
    let lower = squareArray.length - 1;
    let arr = [];

    while (upper < lower && left < right) {
        for (let i = left; i < right; i++) {
            arr.push(squareArray[upper][i]);
        }
        for (let i = upper; i <= lower; i++) {
            arr.push(squareArray[i][right]);
        }
        right -= 1;
        upper += 1;
        for (let i = right; i >= left; i--) {
            arr.push(squareArray[lower][i]);
        }
        for (let i = lower - 1; i >= upper; i--) {
            arr.push(squareArray[i][left]);
        }

        lower -= 1;
        left += 1;
    }
    console.log(arr);
}

const square = [
    [1, 2, 3, 4, 124],
    [5, 6, 7, 8, 123],
    [9, 10, 11, 12, 111],
    [13, 14, 15, 16, 17],
    [13, 14, 15, 16, 17]
];

unroll(square);


module.exports = unroll;
