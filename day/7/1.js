const inputs = [0, 1, 2]
// [1, 0, 2, 3, 4]
// [0, 2, 3, 4, 1]
// [2, 3, 4, 1, 0]
// [3, 4, 1, 0, 2]
// [4, 1, 0, 2, 4]

module.exports.main = function (input) {

}

const allPossibilities = (arr) => {
    if (arr.length > 1) {
        allPossibilities(arr.slice(- arr.length + 1));
    }
    arr.shift(1);
}

const shift = (arr) => {
    const first = arr.shift();
    arr.push(first);
}