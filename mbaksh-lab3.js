// M Baksh
// ITMD 441-02 Undergraduate Student


//Exercise #1
function minMaxAverage(array) {
    let total = array.length;
    let min = Infinity
    let max = -Infinity
    let sum = 0

    for (let i = 0; i < total; i++) {
        let current = array[i];
        if (current < min) {
            min = current;
        }
        if (current > max) {
            max = current;
        }
        sum += current;
    }

    let average = sum / total;

    let output = "Total Numbers: " + total + ", Min Value: " + min + ", Max Value: " + max + ", Average: " + average;

    console.log(output);
}

minMaxAverage([2, 5, 23, 6, 9, 4, 30, 3]);
minMaxAverage([6, 5, 3, 5, 10, 12, 8, 9]);
minMaxAverage([-5, 9, 14, 10, 22, 7, 5, 8]);
